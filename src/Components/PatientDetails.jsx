import React from 'react'
import { Grid } from "@material-ui/core"

export default function PatientDetails() {
    return (
        <div className="patientDetails">
            <Grid container direction="row" className="flexBase" style={{marginLeft: "15px"}}>
                <Grid xs={12} item container>
                    <Grid xs={2} item>
                        <p style={{color: "#3486eb"}}>Priya Mehta 32Y 4M</p>
                    </Grid>
                    <Grid xs={2} item>
                        ID: {" "} P0987
                    </Grid>
                    <Grid xs={2} item>
                        With <span style={{color: "#3486eb"}}>G</span>3 {" "} <span style={{color: "#3486eb"}}>P</span>0 {" "} <span style={{color: "#3486eb"}}>L</span>1 {" "} <span style={{color: "#3486eb"}}>A</span>1
                    </Grid>
                    <Grid xs={2} item>
                        8 Weeks Pregnent
                    </Grid>
                    <Grid xs={2} item>
                        LMP: 20/01/2020
                    </Grid>
                    <Grid xs={2} item>
                        EDD: 29/10/2020
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
