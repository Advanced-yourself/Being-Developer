import { useState, useEffect } from "react";
import Progressbar from "../ProgressBar/ProgressBar.jsx";
import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import {
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
} from "@mui/icons-material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import BasicModalDialog from "../Notes_box/NotesBox.jsx";
import IconButton from "@mui/joy/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import codingninjas from "../../../src/assets/CODING.jpg";
import leet from "../../../src/assets/leetcode.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ArrayQuestion() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]); // Corrected state for selected items
  const [bookmarkStates, setBookmarkStates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconType, setIconType] = useState("outlined");
  const [selectAllNotes, setSelectAllNotes] = useState(false); // State to track select all notes

  const toggleBookmark = (index) => {
    const newBookmarkStates = [...bookmarkStates];
    newBookmarkStates[index] = !newBookmarkStates[index];
    setBookmarkStates(newBookmarkStates);
  };
  const handleDescriptionIconClick = () => {
    setIconType(iconType === "outlined" ? "filled" : "outlined");
    setIsModalOpen(true);
  };

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

  const { qid } = useParams();
  console.log("questionId:", qid);
  console.log("hello");

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    axios
      .get(`http://localhost:5100/api/questions/getQuestions/${qid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setQuestions(response.data.questions);
        console.log(response.data.questions);
        // Initialize bookmarkStates array with false values for each question
        // setBookmarkStates(Array(response.data.questions.length).fill(false));
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, [qid]);

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
            overflowX: "auto",
          }}
        >
          <thead>
            <tr>
              <th></th>
              <th style={{ color: "black", fontWeight: "bold" }}>Question</th>
              <th style={{ color: "black", fontWeight: "bold" }}>Link</th>
              <th style={{ color: "black", fontWeight: "bold" }}>Note</th>
              <th style={{ color: "black", fontWeight: "bold" }}>Bookmark</th>
            </tr>
          </thead>

          <tbody>
            {questions.map((question, index) => {
              const isItemSelected = isSelected(question.title);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <tr
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={question._id}
                >
                  <td>
                    <Checkbox
                      checked={isSelected(question._id)}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                      onChange={() => toggleSelection(question._id)}
                      icon={<CheckBoxOutlineBlankOutlined />}
                      checkedIcon={<CheckBoxOutlined />}
                    />
                  </td>
                  <td>
                    <p style={{ margin: 0 }}>{question.title}</p>
                  </td>
                  <td id={labelId} scope="row">
                    <p style={{ display: "inline" }}>
                      <a
                        href={question.links[0]}
                        style={{ marginRight: "10px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={codingninjas}
                          style={{ width: "30px" }}
                          alt="Coding Ninjas"
                        />
                      </a>
                      <a
                        href={question.links[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={leet}
                          style={{ width: "25px" }}
                          alt="LeetCode"
                        />
                      </a>
                    </p>
                  </td>
                  <td>
                    {iconType === "outlined" ? (
                      <DescriptionOutlinedIcon
                        onClick={handleDescriptionIconClick}
                      />
                    ) : (
                      <DescriptionIcon onClick={handleDescriptionIconClick} />
                    )}
                  </td>
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
