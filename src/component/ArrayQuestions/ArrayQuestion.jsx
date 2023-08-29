// import React from "react";
import Progressbar from "../ProgressBar/ProgressBar.jsx";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import {
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
} from "@mui/icons-material";

// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
// import { useEffect,useState } from 'react';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useState } from "react";

function createData(name, calories, fat) {
  // const [isBookmarked, setBookmarked] = useState(false);
  const bookmark = <BookmarkBorderIcon />;
  return {
    name,
    calories,
    fat,
    bookmark,
  };
}

const rows = [
  createData(
    "Reverse the array",
    [
      "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
      "https://www.codingninjas.com/codestudio/problems/reverse-the-array_1262298?topList=love-babbar-dsa-sheet-problems",
    ],
    0,
    1
  ),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 1, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const headCells = [
  {
    id: "Questions",
    numeric: true,
    disablePadding: false,
    label: "Questions",
  },
  {
    id: "Link",
    numeric: true,
    disablePadding: false,
    label: "Link",
  },
  {
    id: "Note",
    numeric: true,
    disablePadding: false,
    label: "Note",
  },
  {
    id: "Bookmark",
    numeric: true,
    disablePadding: false,
    label: "Bookmark",
  },
];

function EnhancedTableHead(props) {
  const {
    // onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    toggleTheme,
    theme,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <thead toggleTheme={toggleTheme} theme={theme}>
      <tr>
        <th>{/* //For spacing */}</th>
        {headCells.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th key={headCell.id}>
              <Link
                underline="none"
                // color="red"
                textColor={active ? muiTheme.palette.primary.main : "#000000"} // Set dark black color if active, otherwise use predefined color
                component="button"
                onClick={createSortHandler(headCell.id)}
                fontWeight="bold"
                // startDecorator={
                //   headCell.numeric ? (
                //     // <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                //   ) : null
                // }
                endDecorator={
                  !headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                sx={{
                  "& svg": {
                    transition: "0.2s",
                    transform:
                      active && order === "desc"
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                  },
                  "&:hover": { "& svg": { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: "background.level1",
        }),
        borderTopLeftRadius: "var(--unstable_actionRadius)",
        borderTopRightRadius: "var(--unstable_actionRadius)",
      }}
    >
      <Typography
        level="h6"
        sx={{ flex: "1 1 100%" }}
        id="tableTitle"
        component="div"
      >
        DSA SHEET
      </Typography>
    </Box>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ArrayQuestion() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [bookmarkStates, setBookmarkStates] = useState(
    Array(rows.length).fill(false)
  );
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === "asc";
  //   setOrder(isAsc ? "desc" : "asc");
  //   setOrderBy(property);
  // };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelected = rows.map((n) => n.name);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const toggleBookmark = (index) => {
    const newBookmarkStates = [...bookmarkStates];
    newBookmarkStates[index] = !newBookmarkStates[index];
    setBookmarkStates(newBookmarkStates);
  };
  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleClick = (event, name) => {
  //   event.stopPropagation(); // Prevent row click event from triggering

  //   // Toggle the selection of the clicked checkbox
  //   toggleBookmark(name);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;
  const isSelected = (name) => {
    return selected.indexOf(name) !== -1;
  };

  const toggleSelection = (name) => {
  const newSelected = [...selected];
  if (isSelected(name)) {
    newSelected.splice(newSelected.indexOf(name), 1);
  } else {
    newSelected.push(name);
  }
  setSelected(newSelected);
};

  return (
    <div className="page">
      <Progressbar
        className="App"
        bgcolor="#99ccff"
        progress="95"
        height={20}
      />

      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <Table
          aria-labelledby="tableTitle"
          hoverRow
          sx={{
            "--TableCell-headBackground": "transparent",

            "--TableCell-selectedBackground": (theme) =>
              theme.vars.palette.info.softBg,
            "& thead th:nth-child(1)": {
              width: "40px",
            },
            "& thead th:nth-child(2)": {
              width: "30%",
            },
            "& tr > *:nth-child(n+3)": { textAlign: "right" },
            overflowX: "auto", // Enable horizontal scrolling
          }}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            // onSelectAllClick={handleSelectAllClick}
            // onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <tbody>
            {rows.map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <tr
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                >
                  <td>
                    <Checkbox
                      checked={isSelected(rows[index].name)}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                      onChange={() => toggleSelection(rows[index].name)} // Toggle selection by row name
                      icon={<CheckBoxOutlineBlankOutlined />} // Custom icon for unchecked state
                      checkedIcon={<CheckBoxOutlined />} // Custom icon for checked state
                    />
                  </td>
                  <td id={labelId} scope="row">
                    {row.name}
                  </td>
                  <td>
                    <p style={{ display: "inline" }}>
                      <a href={row.calories[0]} style={{ marginRight: "10px" }}>
                        Link1
                      </a>
                      <a href={row.calories[1]}>Link2</a>
                    </p>
                  </td>
                  <td>{row.fat}</td>
                  <td>
                    <IconButton onClick={() => toggleBookmark(index)}>
                      {bookmarkStates[index] ? (
                        <BookmarksIcon />
                      ) : (
                        <BookmarkBorderIcon />
                      )}
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
