import { ChevronDown } from 'lucide-react';
import './AdminLayout.css';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <Link to="/admin/settings" className="admin-logo">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=f59e0b" alt="Logo" />
          Panel
        </Link>

        <nav className="admin-nav">
          <div className="admin-nav-item">Dashboard</div>
          <div className="admin-nav-item">
            Kullanıcılar <ChevronDown size={14} style={{marginLeft: 4}} />
          </div>
          <div className="admin-nav-item">
            Eğitim <ChevronDown size={14} style={{marginLeft: 4}} />
          </div>
          <div className="admin-nav-item">
            Analiz & Ajanlar <ChevronDown size={14} style={{marginLeft: 4}} />
          </div>
          <div className="admin-nav-item">
            İletişim <ChevronDown size={14} style={{marginLeft: 4}} />
          </div>
          <Link to="/admin/settings" className="admin-nav-item active">
            Ayarlar <ChevronDown size={14} style={{marginLeft: 4}} />
          </Link>
        </nav>

        <div className="admin-user">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Alex&backgroundColor=f43f5e" alt="Admin Avatar" />
          <div className="admin-user-info">
            <span className="admin-user-name">Admin Kullanıcı</span>
            <span className="admin-user-role">Admin</span>
          </div>
          <ChevronDown size={16} color="#64748b" />
        </div>
      </header>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
