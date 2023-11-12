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
import { BASE_URL } from "../../config.js";
import { codingNinjas, leetCode } from "../../utils/image.js";

export default function ArrayQuestion() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [bookmarkStates, setBookmarkStates] = useState([]);
  const [iconStates, setIconStates] = useState(
    Array(questions.length).fill(false)
  );
  const [notes, setNotes] = useState(Array(questions.length).fill("")); // Initialize notes array with empty strings
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const toggleNotes = (index) => {
    // Toggle the icon state
    const updatedIconStates = [...iconStates];
    updatedIconStates[index] = !iconStates[index];
    setIconStates(updatedIconStates);

    // Open the notes dialog for the selected question
    setShowModal(true);
    setSelectedQuestionIndex(index);
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

    const newPercentage = Math.round(
      (newSelected.length / questions.length) * 100
    );
    setProgressPercentage(newPercentage);
  };

  const { qid } = useParams();
  console.log("questionId:", qid);

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    axios
      .get(`${BASE_URL}api/questions/getQuestions/${qid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setQuestions(response.data.questions);
        setIconStates(Array(response.data.questions.length).fill(false)); // Initialize iconStates
        setNotes(Array(response.data.questions.length).fill("")); // Initialize notes array with empty strings for each question
        setBookmarkStates(Array(response.data.questions.length).fill(false));
        console.log(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, [qid]);

  const toggleBookmarkHandler = async (questionId, index) => {
    try {
      const newBookmarkStates = [...bookmarkStates];
      newBookmarkStates[index] = !newBookmarkStates[index];
      setBookmarkStates(newBookmarkStates);

      const token = localStorage.getItem("loginToken");
      await axios.post(
        "YOUR_BACKEND_ENDPOINT_HERE",
        {
          questionId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  return (
    <div className="page">
      <Progressbar
        className="App"
        bgcolor="#99ccff"
        progress={progressPercentage}
        height={20}
      />

      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm",minHeight:"100vh" }}
      >
        <Table
          aria-labelledby="tableTitle"
          hoverRow
          sx={{
            "--TableCell-headBackground": "transparent",
            "--TableCell-selectedBackground": "red", // Use a color value here
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
              const isItemSelected = isSelected(question._id);
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
                    <p>
                      <a
                        href={question.links[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={codingNinjas}
                          style={{ width: "30px"}}
                          alt="Coding Ninjas"
                        />
                      </a>
                      <a
                        href={question.links[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={leetCode}
                          style={{ width: "25px" }}
                          alt="LeetCode"
                        />
                      </a>
                    </p>
                  </td>
                  <td onClick={() => toggleNotes(index)}>
                    {iconStates[index] ? (
                      <DescriptionIcon />
                    ) : (
                      <DescriptionOutlinedIcon />
                    )}
                  </td>
                  <td>
                    <IconButton
                      onClick={() => toggleBookmarkHandler(question._id, index)}
                    >
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
      <BasicModalDialog
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={(notesText) => {
          if (notesText.length > 1) {
            const updatedNotes = [...notes];
            updatedNotes[selectedQuestionIndex] = notesText;
            setNotes(updatedNotes);
          }
          setShowModal(false);
          setSelectedQuestionIndex(null);
        }}
        initialNotes={
          selectedQuestionIndex !== null
            ? notes[selectedQuestionIndex] || ""
            : ""
        }
      />
    </div>
  );
}
