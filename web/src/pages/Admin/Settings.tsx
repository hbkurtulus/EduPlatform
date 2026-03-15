import { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Upload, Mail, Save, RefreshCcw } from 'lucide-react';
import './Settings.css';

interface SettingsData {
  siteName: string;
  timeZone: string;
  siteLogoLight: string;
  siteLogoDark: string;
  favicon: string;
  email: string;
  maintenance: boolean;
  twoFactor: boolean;
  footerText: string;
}

const Settings = () => {
  const [settings, setSettings] = useState<SettingsData>({
    siteName: 'EduPlatform',
    timeZone: 'Europe/Istanbul',
    siteLogoLight: '',
    siteLogoDark: '',
    favicon: '',
    email: 'info@eduplatform.com',
    maintenance: false,
    twoFactor: true,
    footerText: '© 2026 EduPlatform. Tüm hakları saklıdır.',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/settings');
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch('http://localhost:8080/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Ayarlar başarıyla kaydedildi.' });
      } else {
        setMessage({ type: 'error', text: 'Ayarlar kaydedilirken hata oluştu.' });
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ type: 'error', text: 'Bağlantı hatası oluştu.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <RefreshCcw className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return (
    <div className="settings-container">
      <h1 className="admin-page-title">Genel Ayarlar</h1>
      
      {message && (
        <div className={`p-4 mb-4 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <div className="settings-card">
        <div className="settings-header">
          <SettingsIcon className="settings-header-icon" size={20} />
          Genel Bilgiler
        </div>
        
        <div className="settings-body">
          <div className="settings-form-main">
            
            <div className="form-group">
              <label className="form-label">Site Adı</label>
              <input 
                type="text" 
                className="form-input" 
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              />
              <span className="form-help">Bu isim tarayıcı başlığında ve site genelinde görünecektir.</span>
            </div>

            <div className="form-group">
              <label className="form-label">Footer Yazısı</label>
              <input 
                type="text" 
                className="form-input" 
                value={settings.footerText}
                onChange={(e) => setSettings({ ...settings, footerText: e.target.value })}
              />
              <span className="form-help">Sitenin en alt kısmında (footer) görünecek telif hakkı veya bilgilendirme yazısı.</span>
            </div>

            <div className="form-group">
              <label className="form-label">Sistem Saat Dilimi</label>
              <select 
                className="form-select" 
                value={settings.timeZone}
                onChange={(e) => setSettings({ ...settings, timeZone: e.target.value })}
              >
                <option value="Europe/London">Europe/London</option>
                <option value="Europe/Istanbul">Europe/Istanbul</option>
                <option value="America/New_York">America/New_York</option>
              </select>
              <span className="form-help">Sistemdeki tüm tarih ve saatler bu saat dilimine göre gösterilecektir.</span>
            </div>

            <div className="upload-grid">
              <div className="upload-box light">
                <label className="form-label" style={{alignSelf: 'flex-start'}}>Site Logosu (Açık Mod)</label>
                <div className="upload-preview">
                  <img src={settings.siteLogoLight || "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=f59e0b"} alt="Açık Mod Logo" />
                </div>
                <div className="upload-btn">
                  <Upload size={16} /> Logo Seç
                </div>
                <p className="upload-help">Önerilen: PNG formatı, şeffaf arka plan.</p>
              </div>

              <div className="upload-box dark">
                <label className="form-label" style={{alignSelf: 'flex-start', color: 'white'}}>Site Logosu (Koyu Mod)</label>
                <div className="upload-preview">
                  <img src={settings.siteLogoDark || "https://api.dicebear.com/7.x/adventurer/svg?seed=Jocelyn&backgroundColor=3b82f6"} alt="Koyu Mod Logo" />
                </div>
                <div className="upload-btn">
                  <Upload size={16} /> Logo Seç
                </div>
                <p className="upload-help">Önerilen: PNG formatı, beyaz/açık renkli.</p>
              </div>

              <div className="upload-box light">
                <label className="form-label" style={{alignSelf: 'flex-start'}}>Favicon</label>
                <div className="upload-preview favicon-preview">
                  <img src={settings.favicon || "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=f59e0b"} alt="Favicon" />
                </div>
                <div className="upload-btn">
                  <Upload size={16} /> Favicon Seç
                </div>
                <p className="upload-help">Önerilen: 32x32 veya 64x64 px, PNG/ICO.</p>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">İletişim E-posta Adresi</label>
              <div className="input-with-icon">
                <Mail size={18} />
                <input 
                  type="email" 
                  className="form-input" 
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                />
              </div>
            </div>

          </div>

          <div className="settings-sidebar">
            <h3 className="form-label" style={{fontSize: 16, marginBottom: 16}}>Güvenlik Ayarları</h3>
            
            <div className="security-card">
              <div className="security-group">
                <div className="toggle-switch">
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.maintenance}
                      onChange={(e) => setSettings({ ...settings, maintenance: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                  <span className="form-label" style={{margin:0}}>Bakım Modu</span>
                </div>
                <span className="form-help">Aktif edildiğinde, adminler dışındaki kullanıcılar siteye erişemez.</span>
              </div>

              <div className="security-group">
                <div className="toggle-switch">
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.twoFactor}
                      onChange={(e) => setSettings({ ...settings, twoFactor: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                  <span className="form-label" style={{margin:0}}>2FA Sistemi Kullanımı</span>
                </div>
                <span className="form-help">Bu ayar 2FA özelliğinin sistem genelinde kullanılıp kullanılmayacağını belirler. Kurulum işlemleri kullanıcı profili sayfasından yapılır.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button 
            className="btn btn-primary" 
            style={{backgroundColor: '#6366f1', display: 'flex', alignItems: 'center', gap: 8}}
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <RefreshCcw className="animate-spin" size={18} /> : <Save size={18} />}
            {saving ? 'Kaydediliyor...' : 'Ayarları Kaydet'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
