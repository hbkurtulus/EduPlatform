package main

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Settings struct {
	SiteName      string `json:"siteName" bson:"siteName"`
	TimeZone      string `json:"timeZone" bson:"timeZone"`
	SiteLogoLight string `json:"siteLogoLight" bson:"siteLogoLight"`
	SiteLogoDark  string `json:"siteLogoDark" bson:"siteLogoDark"`
	Favicon       string `json:"favicon" bson:"favicon"`
	Email         string `json:"email" bson:"email"`
	Maintenance   bool   `json:"maintenance" bson:"maintenance"`
	TwoFactor     bool   `json:"twoFactor" bson:"twoFactor"`
	FooterText    string `json:"footerText" bson:"footerText"`
}

var db *mongo.Database

func connectDB() {
	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		uri = "mongodb://root:rootpassword@mongodb:27017"
	}

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatal(err)
	}

	db = client.Database("eduplatform")
	log.Println("Connected to MongoDB")
}

func main() {
	connectDB()

	app := fiber.New()
	app.Use(logger.New())
	app.Use(cors.New())

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Welcome to EduPlatform API",
			"status":  "success",
		})
	})

	api := app.Group("/api")

	api.Get("/settings", func(c *fiber.Ctx) error {
		collection := db.Collection("settings")
		var settings Settings
		err := collection.FindOne(context.TODO(), bson.M{}).Decode(&settings)
		if err != nil {
			// If not found, return default settings
			return c.JSON(Settings{
				SiteName:    "EduPlatform",
				TimeZone:    "Europe/Istanbul",
				Email:       "info@eduplatform.com",
				FooterText:  "© 2026 EduPlatform. Tüm hakları saklıdır.",
				Maintenance: false,
				TwoFactor:   true,
			})
		}
		return c.JSON(settings)
	})

	api.Post("/settings", func(c *fiber.Ctx) error {
		collection := db.Collection("settings")
		var settings Settings
		if err := c.BodyParser(&settings); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
		}

		_, err := collection.UpdateOne(
			context.TODO(),
			bson.M{},
			bson.M{"$set": settings},
			options.Update().SetUpsert(true),
		)
		if err != nil {
			return c.Status(500).JSON(fiber.Map{"error": "Failed to update settings"})
		}

		return c.JSON(fiber.Map{"status": "success", "message": "Settings updated"})
	})

	log.Println("EduPlatform API starting on port 8080...")
	log.Fatal(app.Listen(":8080"))
}
