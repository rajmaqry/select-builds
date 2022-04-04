import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ITableMap, ITable } from "./points";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import * as fs from "fs";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function BasicCard() {
  const [tableName, setTableName] = React.useState("");
  const tables: string[] = [];

  const handleTableSelect = (e) => {
    setTableName(e.target.value);
  };
  const tableSelect = (e) => {
    tables.push(e.target.id);
  };
  const renderTables = () => {
    let points: ITableMap = JSON.parse(
      fs.readFileSync("./sample.json", "utf8")
    );

    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: [0, 2, 0, 0], width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id={tableName}
            select
            label="Select"
            value={tableName}
            onChange={handleTableSelect}
            helperText=""
          >
            {Object.keys(points).map((p) => (
              <MenuItem
                id={points[p].table_key}
                value={points[p].table_name}
                onClick={tableSelect}
              >
                {points[p].table_name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    );
  };

  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Build your SQL
        </Typography>
        <Typography variant="h5" component="div">
          Pick Ingestions Points : {renderTables()}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
