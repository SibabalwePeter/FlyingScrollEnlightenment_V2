import * as React from 'react';
import { Container } from 'reactstrap';
import '../../store/Assessment';
import Chart from "react-google-charts";

function Results(){
    return (
        <div>
            <h1>Career test result</h1>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                ]}
                options={{
                    title: 'Career path suggestions',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>);
  }

export default Results