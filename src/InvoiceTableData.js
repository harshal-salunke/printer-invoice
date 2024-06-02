import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Divider,
  Grid,
} from "@material-ui/core";

const styles = createStyles({
  table: {
    minWidth: 650,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    marginBottom: 8,
  },
  specialRequest: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginBottom: 16,
  },
  specialRequestText: {
    color: "#333",
  },
  payment: {
    marginTop: 16,
  },
});

interface Props extends WithStyles<typeof styles> {}

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface State {
  items: Item[];
  subtotal: number;
  discount: number;
  taxes: number;
  deliveryCharges: number;
  total: number;
}

class OrderSummary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [
        { name: "Veg peperico (M)", quantity: 1, price: 34 },
        { name: "Cheese Paradise", quantity: 1, price: 24 },
        { name: "Cheese dip", quantity: 2, price: 6 },
      ],
      subtotal: 64,
      discount: 32,
      taxes: 1,
      deliveryCharges: 1,
      total: 34,
    };
  }

  render() {
    const { classes } = this.props;
    const { items, subtotal, discount, taxes, deliveryCharges, total } =
      this.state;

    return (
      <Box p={3}>
        <Typography variant="h6" className={classes.header}>
          Dear Customer,
        </Typography>
        <Typography className={classes.details}>
          Here are your order details:
        </Typography>
        <Grid container spacing={1} className={classes.details}>
          <Grid item xs={6}>
            <Typography>Order Date: 4 Aug 2023, 03:30 PM</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Order Number: OD00000142</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Order Type: Delivery</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Customer: John Smith</Typography>
          </Grid>
        </Grid>
        <Box className={classes.details}>
          <Typography className={classes.title}>Delivery Address:</Typography>
          <Typography>John Smith</Typography>
          <Typography>Apartment 66</Typography>
          <Typography>London</Typography>
          <Typography>United Kingdom</Typography>
          <Typography>SW11 3AA</Typography>
          <Typography>07111111111</Typography>
        </Box>
        <Box className={classes.specialRequest}>
          <Typography className={classes.specialRequestText}>
            Please drop this parcel to my neighbour. Incase of any assistance
            call on +911234567890 (Ravi Ahuja Neighbour).
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="order details table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.payment}>
          <Typography>Sub total: ${subtotal}</Typography>
          <Typography>Discount: -${discount}</Typography>
          <Typography>Taxes: ${taxes}</Typography>
          <Typography>Delivery charges: ${deliveryCharges}</Typography>
          <Divider />
          <Typography variant="h6">Total: ${total}</Typography>
          <Typography>Payment Method: Cash On Delivery</Typography>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(OrderSummary);
