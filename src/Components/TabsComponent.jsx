import React, { useState, useEffect } from 'react'
import Analytics from "./Analytics"
import Compliance from "./Compliance"
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'
import { useTheme, makeStyles, withStyles } from '@material-ui/core/styles';

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      marginLeft: "20px"
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: 'black',
      backgroundColor: "#eee",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(2.5),
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      '&:focus': {
        color: "#fff",
        backgroundColor: "#3486eb",
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2} style={{padding:"0px"}}>
            {children}
          </Box>
        )}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    header:{
        background: "transparent",
        color: "black",
        boxShadow: "0px 0px 0px 0px"
    },

})

export default function TabsComponent() {
    const theme = useTheme();
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" className={classes.header}>
                <StyledTabs
                    value={value}
                    onChange={handleTabChange}
                    TabIndicatorProps={{style: {background:'#566080'}}}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <StyledTab className="tabTitle" label="Analytics" {...a11yProps(0)} />
                    <StyledTab className="tabTitle" label="Compliance" {...a11yProps(1)} />
                </StyledTabs>
            </AppBar>
            {value === 0 &&
                <TabPanel value={value} index={0} dir={theme.direction} className="tabPanel">
                    <Analytics />
                </TabPanel>
            } 
            {value === 1 &&
                <TabPanel value={value} index={1} dir={theme.direction} className="tabPanel">
                    <Compliance />
                </TabPanel>
            } 
        </div>
    )
}
