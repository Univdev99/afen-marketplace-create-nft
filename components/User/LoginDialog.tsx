import React, { FormEvent } from "react";
import { LoginInput } from "../Auth";
import { Dialog } from "../Dialog/Dialog";
import Button from "../IO/Button";
import TextInput from "../IO/TextInput";
import Title from "../IO/Title";
import Typography from "../IO/Typography";

interface LoginDialogProps {
  isOpen?: boolean;
  toggle: () => void;
  onLogin: (data: LoginInput) => Promise<void>;
  onOpenRegisterDialog: () => void;
}

export const LoginDialog: React.FC<LoginDialogProps> = ({
  isOpen,
  toggle,
  onLogin,
  onOpenRegisterDialog,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await onLogin({ email, password });
    setLoading(false);
  };

  return (
    <Dialog onCloseDialog={toggle} isOpen={isOpen}>
      <div className="md:w-80">
        <Title>Login</Title>
        <Typography size="small">
          Don't have an account?{" "}
          <Button
            type="plain"
            size="small"
            style="underline"
            onClick={() => onOpenRegisterDialog()}
          >
            Register
          </Button>
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <TextInput
              label="Email"
              placeholder="john@example.com"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <TextInput
              label="Password"
              placeholder="john@example.com"
              type="password"
              value={password}
              onChange={setPassword}
            />

            <Button block loading={loading} style="my-3" inputType="submit">
              Login
            </Button>
            <div className="text-center">
              <Typography size="small" sub style="">
                Forgot your password?
              </Typography>
            </div>
          </div>
        </form>
      </div>
    </Dialog>
  );
};