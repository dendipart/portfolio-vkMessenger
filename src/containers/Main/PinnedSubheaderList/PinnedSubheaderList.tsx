import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import styled from "@emotion/styled";

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 500,
        position: "relative",
        overflow: "auto",
        maxHeight: 800,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <StyledListSubheader>{`I'm sticky ${sectionId}`}</StyledListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

const StyledListSubheader = styled(ListSubheader)`
  display: flex;
  flex-direction: column-reverse;
`;
