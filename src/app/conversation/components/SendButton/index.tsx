import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface SendButtonProps {
  onClick: () => void;
}
export default function SendButton({ onClick }: Readonly<SendButtonProps>) {
  return (
    <Button
      className="dark bg-linear-to-tr from-purple-dark-500 to-blue-dark-500"
      radius="full"
      onPress={onClick}
    >
      <Icon icon="mi:send" fontSize={24} />
    </Button>
  );
}