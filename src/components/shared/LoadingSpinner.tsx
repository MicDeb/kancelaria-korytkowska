interface IProps {
  color?: string;
}

const LoadingSpinner: React.FC<IProps> = ({ color = 'currentColor' }) => (
  <span className="absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 p-0" role="status">
    <svg
      shapeRendering="geometric-precision"
      className="h-6 w-6 animate-[spin_1.4s_linear_infinite]"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="origin-center animate-[spinner-dash_1.4s_ease-in-out_infinite]"
        style={{ strokeDasharray: '85', strokeDashoffset: 0 }}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        cx="16"
        cy="16"
        r="14"
      />
    </svg>
  </span>
);

export default LoadingSpinner;
