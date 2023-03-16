// ** MUI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
      <Typography sx={{ mr: 2 }}>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=5511946335250&text&type=phone_number&app_absent=0"
          sx={{ mr: 1 }}
        >
          ListaNinja ®
        </Link>
        {`${new Date().getFullYear()} `}
      </Typography>

      {hidden ? null : (
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", "& :not(:last-child)": { mr: 4 } }}>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511982969676&text=Boa%20tarde%2C%20Vim%20pelo%20site%20estou%20precisando%20de%20ajuda.%20"
          >
            Support
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default FooterContent;
