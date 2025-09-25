import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            <span className="theme-icon">
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </div>
        </div>
        <span className="theme-toggle-label">
          {isDarkMode ? 'Dark' : 'Light'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;