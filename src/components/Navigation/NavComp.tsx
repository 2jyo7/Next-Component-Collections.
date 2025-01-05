interface NavLink {
  icon?: React.ReactNode; // Optional icon
  text: string; // Required text
}

interface NavCompProps {
  title: string;
  link1: NavLink;
  link2: NavLink;
  link3: NavLink;
  styleNC: string; // Styles for the container
  styleBtn: string; // Base styles for the buttons
}

const NavComp: React.FC<NavCompProps> = ({
  title,
  link1,
  link2,
  link3,
  styleNC,
  styleBtn,
}) => {
  return (
    <div
      className={`${styleNC} flex w-full text-white rounded-md my-4 py-4 px-6 justify-between items-center shadow-lg`}
    >
      {/* Title Section */}
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-4">
        {/* Button 1 */}
        <button
          className={`${styleBtn} flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium 
          shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg`}
        >
          {link1.icon && <span>{link1.icon}</span>}{" "}
          {/* Conditionally render icon */}
          <span>{link1.text}</span>
        </button>

        {/* Button 2 */}
        <button
          className={`${styleBtn} flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg`}
        >
          {link2.icon && <span>{link2.icon}</span>}{" "}
          {/* Conditionally render icon */}
          <span>{link2.text}</span>
        </button>

        {/* Button 3 */}
        <button
          className={`${styleBtn} flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg`}
        >
          {link3.icon && <span>{link3.icon}</span>}{" "}
          {/* Conditionally render icon */}
          <span>{link3.text}</span>
        </button>
      </div>
    </div>
  );
};

export default NavComp;
