import { AppBar, Box, Toolbar } from "@mui/material";
import {
  //   WalletConnectButton,
  //   WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

type Props = {};

const Header = (_props: Props) => {
  return (
    <AppBar>
      <Toolbar>
        CMV3
        <Box flexGrow={1} />
        <WalletMultiButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
