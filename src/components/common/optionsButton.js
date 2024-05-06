import { Tooltip } from "@chakra-ui/react";

const OptionsButton = ({children, label, placement}) => {
  return (
    <Tooltip hasArrow label={label || 'Copy'} color="white" placement={placement || 'top'}>
      <button className="text-2xl font-medium text-gray-500" >
        {children}
      </button>
    </Tooltip>
  );
};

export default OptionsButton;
