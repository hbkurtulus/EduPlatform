import '../../App.css';
import { 
  Sparkles, 
  Brain, 
  Gamepad2, 
  LineChart, 
  Target, 
  Flame, 
  Library, 
  Users, 
  Medal,
  CheckCircle2,
  Bot,
  Database,
  Timer,
  BookOpen,
  PieChart,
  Gift,
  Twitter,
  Instagram,
  PlayCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="app-container">
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">
              <Gamepad2 size={20} />
            </div>
            EduPlatform
          </div>
          
          <nav className="nav-links">
            <a href="#ozellikler">Özellikler</a>
            <a href="#nasil">Nasıl Çalışır?</a>
            <a href="#kariyer">Kariyer</a>
            <a href="#fiyatlar">Fiyatlar</a>
            <Link to="/admin/settings" style={{color: 'var(--primary)', fontWeight: 600}}>Admin Panel</Link>
          </nav>

          <button className="btn btn-primary">Ücretsiz Kayıt Ol</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <div className="pill">
          <Sparkles size={16} /> Yapay Zeka Destekli Yeni Nesil Eğitim
        </div>
        
        <h1 className="hero-title">
          Sınavlara Hazırlanmanın <br />
          <span className="gradient-text">En Eğlenceli Yolu</span>
        </h1>
        
        <p className="hero-subtitle">
          12 farklı yapay zeka ajanı, oyunlaştırma mekanikleri ve kişiselleştirilmiş 
          çalışma planlarıyla YKS'ye hazırlanmak artık sıkıcı değil. Üstelik tamamen <strong>ÜCRETSİZ!</strong>
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-dark">Hemen Başla</button>
          <button className="btn btn-outline">
            <PlayCircle size={18} /> Nasıl Çalışır?
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">12+</span>
            <span className="stat-label">Yapay Zeka Ajanı</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">10K+</span>
            <span className="stat-label">Soru Havuzu</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">%100</span>
            <span className="stat-label">Güvenilir Kaynak</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">7/24</span>
            <span className="stat-label">Canlı Destek</span>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="agents-section" id="ozellikler">
        <div className="container">
          <h2 className="section-title">Yüksek Konsey ile Tanışın</h2>
          <p className="section-subtitle">
            Sizi 7/24 takip eden, analiz eden ve yönlendiren "Zeka ile Çalışan" yapay zeka ekibimiz...
          </p>
          
          <div className="agents-grid">
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#ec4899', backgroundColor: '#fdf2f8'}}><Brain size={24} /></div>
              <h3>Mentor</h3>
              <p>Gerçekçi yönlendiren, hedeflerinize odaklanmanızı sağlar.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#8b5cf6', backgroundColor: '#f5f3ff'}}><Gamepad2 size={24} /></div>
              <h3>Gamification Coach</h3>
              <p>Öğrenme sürecini eğlenceli bir oyuna dönüştürür.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#10b981', backgroundColor: '#ecfdf5'}}><LineChart size={24} /></div>
              <h3>Analyst</h3>
              <p>Tüm davranışlarınızı verilerle analiz eder.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#f43f5e', backgroundColor: '#fff1f2'}}><Target size={24} /></div>
              <h3>Strategist</h3>
              <p>Sınav tarihine göre en verimli çalışma planını oluşturur.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#f59e0b', backgroundColor: '#fffbeb'}}><Flame size={24} /></div>
              <h3>Motivator</h3>
              <p>Moraliniz düştüğünde size destek olur.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#06b6d4', backgroundColor: '#ecfeff'}}><Library size={24} /></div>
              <h3>Librarian</h3>
              <p>Tüm kaynaklara anında ulaşmanızı sağlar.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#3b82f6', backgroundColor: '#eff6ff'}}><Users size={24} /></div>
              <h3>Parent Liaison</h3>
              <p>Ailenizle iletişimi kurar, periyodik raporlar iletir.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon" style={{color: '#6366f1', backgroundColor: '#eef2ff'}}><Medal size={24} /></div>
              <h3>Scout</h3>
              <p>Performansınızı takip eder, sonuçlarınızı takdir eder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Gamification */}
      <section className="showcase-section container" id="nasil">
        <div className="showcase-grid">
          <div className="showcase-content">
            <div className="pill" style={{backgroundColor: '#f3e8ff', color: '#9333ea'}}>
              <Gamepad2 size={16} /> Oyunlaştırma
            </div>
            <h2>
              Ders Çalışmak Hiç Bu Kadar <br />
              <span className="gradient-text">Eğlenceli</span> Olmamıştı
            </h2>
            <p>
              Sıkıcı testleri hiç, stresli denemeleri ise unutun! Lige deneme, arkadaşlarına meydan 
              okuyarak rekabeti avantaja dönüştürebileceğiniz yepyeni bir macera yaşayın.
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <div>
                  <h4>Lig Sistemi</h4>
                  <p>Bronz liginden başlayıp Elmas ligine kadar yükselin.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <div>
                  <h4>Canlı Düellolar</h4>
                  <p>Gerçek öğrenciler ile gerçek zamanlı soruları hızlı çözün.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <div>
                  <h4>Rozet & Avatar Sistemi</h4>
                  <p>Rakipleri eleyerek en havalı avatarların kilidini açın, vitrininizi geliştirin.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="leaderboard-card">
            <div className="leaderboard-header">
              <div className="leaderboard-title">
                <Medal color="#eab308" size={32} />
                <div>
                  <div style={{fontSize: 12, color: '#64748b'}}>Mevcut Lig</div>
                  <h3 style={{fontSize: 20, margin: 0}}>Altın Ligi</h3>
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: 12, color: '#64748b'}}>Sıralama</div>
                <h3 style={{fontSize: 24, margin: 0}}>#3</h3>
              </div>
            </div>
            
            <div className="leaderboard-list">
              <div className="player-item">
                <div className="player-info">
                  <div className="player-avatar">👨🏻</div>
                  <div>
                    <h4 style={{margin: 0, fontSize: 15}}>Ahmet Y.</h4>
                    <span style={{fontSize: 12, color: '#64748b'}}>1450 XP</span>
                  </div>
                </div>
                <div className="player-rank">#1</div>
              </div>
              
              <div className="player-item">
                <div className="player-info">
                  <div className="player-avatar">👩🏽</div>
                  <div>
                    <h4 style={{margin: 0, fontSize: 15}}>Zeynep K.</h4>
                    <span style={{fontSize: 12, color: '#64748b'}}>1320 XP</span>
                  </div>
                </div>
                <div className="player-rank">#2</div>
              </div>
              
              <div className="player-item active">
                <div className="player-info">
                  <div className="player-avatar" style={{backgroundColor: 'white'}}>👦🏻</div>
                  <div>
                    <h4 style={{margin: 0, fontSize: 15}}>Sen</h4>
                    <span style={{fontSize: 12, color: '#primary'}}>1250 XP</span>
                  </div>
                </div>
                <div className="player-rank">#3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Features Grid */}
      <section className="dark-features">
        <div className="container">
          <h2 className="section-title">Eksiksiz Bir Hazırlık Platformu</h2>
          <p className="section-subtitle">Başarılı olmanız için ihtiyacınız olan her şey tek bir platformda.</p>
          
          <div className="dark-grid">
            <div className="dark-card">
              <div className="dark-icon"><Bot color="#8b5cf6" size={24} /></div>
              <h3>CoPilot AI</h3>
              <p>Çözemediğiniz sorularda adım adım size ipuçları vererek yardımcı olan yapay zeka asistanı.</p>
            </div>
            
            <div className="dark-card">
              <div className="dark-icon"><Database color="#ec4899" size={24} /></div>
              <h3>Akıllı Soru Havuzu</h3>
              <p>Çözdüğünüz sorular üzerinden seviyenize uygun ve sürekli genişleyen akıllı soru havuzu.</p>
            </div>
            
            <div className="dark-card">
              <div className="dark-icon"><Timer color="#10b981" size={24} /></div>
              <h3>Pomodoro Odak</h3>
              <p>Entegre Pomodoro sayacısı ile ders sürelerinizi ve molalarınızı akıllıca yönetin.</p>
            </div>
            
            <div className="dark-card">
              <div className="dark-icon"><BookOpen color="#f59e0b" size={24} /></div>
              <h3>Kelime Kartları</h3>
              <p>Ezber sistemizi görsel hafıza teknikleri ile hazırlanan akıllı kelime kartları ile birleştirin.</p>
            </div>
            
            <div className="dark-card">
              <div className="dark-icon"><PieChart color="#3b82f6" size={24} /></div>
              <h3>Detaylı Analiz</h3>
              <p>Hangi konuda eksikleriniz var, hangi soru tiplerinde hata yapıyorsunuz? Hepsi detaylı panelde.</p>
            </div>
            
            <div className="dark-card">
              <div className="dark-icon"><Gift color="#6366f1" size={24} /></div>
              <h3>Tamamen Ücretsiz</h3>
              <p>Premium üyelik yok, gizli ücret yok. Tüm özellikler herkes için ücretsiz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Hazır Mısın?</h2>
          <p className="cta-desc">
            Binlerce öğrenci arasına katılarak sınavındaki pratik puanları kapmanın ilk adımını 
            at. Kaybetmek yok, sadece öğrenmek var!
          </p>
          <button className="btn btn-primary" style={{padding: '16px 32px', fontSize: 16}}>
            Ücretsiz Kayıt Ol →
          </button>
          <span className="cta-subtext">Kredi kartı gerekmez. İptal edebilirsiniz.</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Gamepad2 size={24} color="#5a4fcf" />
                EduPlatform
              </div>
              <p className="footer-desc">
                Yapay zeka destekli, oyunlaştırma ile tamamen ücretsiz ve eşsiz sınav hazırlık platformu.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-icon"><Twitter size={20} /></a>
                <a href="#" className="social-icon"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Platform</h4>
              <ul>
                <li><a href="#">Özellikler</a></li>
                <li><a href="#">Ajanlar</a></li>
                <li><a href="#">Oyunlaştırma</a></li>
                <li><a href="#">Sıralamalar</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Kurumsal</h4>
              <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Gizlilik Politikası</a></li>
                <li><a href="#">Kullanım Şartları</a></li>
                <li><a href="#">İletişim</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <span>© 2026 EduPlatform. Tüm hakları saklıdır.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
