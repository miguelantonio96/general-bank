export const LoadingIcon = () => {
  return (
    <div>
      <div
        style={{
          width: "30px",
          height: "30px",
          border: "4px solid #ccc",
          borderTop: "4px solid #1976d2",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
};
