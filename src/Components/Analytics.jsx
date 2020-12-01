import React from 'react'
import { Grid } from "@material-ui/core"
import Activity from "./Graphs/Activity"
import Health from "./Graphs/Health"
import Calories from "./Graphs/Calories"
import Sleep from "./Graphs/Sleep"
import Heart from "./Graphs/Heart"
import Blood from "./Graphs/Blood"
import Body from "./Graphs/Body"

export default function Analytics() {
    return (
        <div className="tabs">
            <Grid container direction="row" className="flexBase" style={{height:"100%"}}>
                <Grid xs={12} item style={{display: "flex", flexDirection: "column", alignItems: "space-between"}}>
                    <Grid xs={12} item container className="topGraphContainer">
                        <Grid xs={2} item className="topGraph" style={{display:"block"}}>
                            <div>Activity
                                <div style={{float:"right"}}>
                                    <select style={{border:'none',outline:'none'}}>
                                        <option>Week</option>
                                        <option>Day</option>
                                        <option>Month</option>
                                    </select>
                                </div>
                            </div>
                            <Activity />
                        </Grid>
                        <Grid xs={2} item className="topGraph" style={{display:"block"}}>
                            <div>Heart Rate
                                <div style={{float:"right"}}>
                                    <select style={{border:'none',outline:'none'}}>
                                        <option>Day</option>
                                        <option>Week</option>
                                        <option>Month</option>
                                    </select>
                                </div>
                            </div>
                            <Heart />
                        </Grid>
                        <Grid xs={2} item className="topGraph" style={{display:"block"}}>
                            <div>Blood Pressure
                                <div style={{float:"right"}}>
                                    <select style={{border:'none',outline:'none'}}>
                                        <option>Week</option>
                                        <option>Day</option>
                                        <option>Month</option>
                                    </select>
                                </div>
                            </div>
                            <Blood />
                        </Grid>
                        <Grid xs={2} item className="topGraph" style={{display:"block"}}>
                            <div>Body Temperature
                                <div style={{float:"right"}}>
                                    <select style={{border:'none',outline:'none'}}>
                                        <option>Week</option>
                                        <option>Day</option>
                                        <option>Month</option>
                                    </select>
                                </div>
                            </div>
                            <Body />
                        </Grid>
                        <Grid xs={2} item className="appointment">
                            <p>Past Appointment</p>
                            <div style={{display: "flex", position:"relative", justifyContent: "space-between", alignItems:"center"}}>
                                <div style={{color:"#3486eb", position:"absolute", top:"3vh"}}>
                                    <p>10AM - 11AM</p>
                                    <p>Dr. Rakesh Chavan</p>
                                </div>
                                <div style={{position:"absolute", top:"3vh", right:"10px"}}>
                                    <p>2 Sept</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid xs={12} container item className="bottomGraphContainer">
                        <Grid xs={8} item className="healthGraph">
                            <div>
                                <span style={{fontSize: "medium"}}>Health Conditions</span>
                                <div style={{float:"right"}}>
                                    <select style={{border:'none',outline:'none'}}>
                                        <option>Month</option>
                                        <option>Day</option>
                                        <option>Week</option>
                                    </select>
                                </div>
                            </div>
                            <Health />
                        </Grid>
                        <Grid xs={4} item container className="bottomRightGraphContainer">
                            <Grid xs={12} item container className="lab" spacing={1}>
                                <div style={{fontSize: "medium"}}>Lab Results</div>
                                <Grid xs={12} container item>
                                    <Grid xs={4} item>
                                        <div>
                                            <small className="small">5 August</small>
                                            <p style={{color: "brown"}}>Sugar</p>
                                            <p>140 mg/dL</p>
                                        </div>
                                    </Grid>
                                    <Grid xs={4} item>
                                        <div>
                                            <small className="small">5 August</small>
                                            <p style={{color: "brown"}}>Haemoglobin</p>
                                            <p>140 mg/dL</p>
                                        </div>
                                    </Grid>
                                    <Grid xs={4} item>
                                        <div>
                                            <small className="small">5 August</small>
                                            <p style={{color: "brown"}}>White Blood Cell</p>
                                            <p>140 mg/dL</p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} container item>
                                    <Grid xs={4} item>
                                        <div>
                                            <small className="small">5 August</small>
                                            <p style={{color: "brown"}}>Lymohocyte</p>
                                            <p>3800</p>
                                        </div>
                                    </Grid>
                                    <Grid xs={5} item>
                                        <div>
                                            <small className="small">5 August</small>
                                            <p style={{color: "brown"}}>Red Blood Cell</p>
                                            <p>4.9 million cells/mci.</p>
                                        </div>
                                    </Grid>
                                    <Grid xs={3} item/>
                                </Grid>
                            </Grid>
                            <Grid xs={12} item className="rightBottom">
                                <Grid xs={5} item className="bottomGraph" style={{position:"relative"}}>
                                    Calories Burned
                                    <Calories />
                                    <div style={{position:"absolute", top:"7.5vh", left:"40%"}}>
                                        <p style={{fontSize: "10px"}}>230 <br/>Kcal</p>
                                    </div>
                                </Grid>
                                <Grid xs={7} item className="bottomGraph" style={{marginLeft:"10px"}}>
                                    Sleep Pattern
                                    <Sleep />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
