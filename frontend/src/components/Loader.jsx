const Loader = ({ message = "Loading your quiz..." }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p style={{ 
        color: 'var(--text-tertiary)', 
        fontSize: '1.1rem',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 'var(--spacing-md)'
      }}>
        {message}
      </p>
    </div>
  );
};

export default Loader;
