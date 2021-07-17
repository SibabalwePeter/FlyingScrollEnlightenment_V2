// Assessment State
export class AssessmentState {
    Realistic: number =0;
    Investigative: number=0;
    Artistic: number=0;
    Social: number=0;
    Enterprising: number=0;
    Conventional: number=0;
}

export var AssessmentStorage1 ={
    Realistic: 0,
    Investigative: 0,
    Artistic: 0,
    Social: 0,
    Enterprising: 0,
    Conventional: 0,
}

export const Statstable = (category: string, value: number) => {
    if (category === undefined) {
        return { Realistic: 0, Investigative: 0, Artistic: 0, Social: 0, Enterprising: 0, Conventional: 0 };
    }
    else if (category ==='R') AssessmentStorage1.Realistic =Number(AssessmentStorage1.Realistic) + Number(value);
    else if (category === 'I') AssessmentStorage1.Investigative= Number(AssessmentStorage1.Investigative) + Number(value);
    else if (category === 'A') AssessmentStorage1.Artistic= Number(AssessmentStorage1.Artistic) + Number(value);
    else if (category === 'S') AssessmentStorage1.Social= Number(AssessmentStorage1.Social) + Number(value);
    else if (category === 'E') AssessmentStorage1.Enterprising= Number(AssessmentStorage1.Enterprising ) + Number(value);
    else if (category === 'C') AssessmentStorage1.Conventional= Number(AssessmentStorage1.Conventional ) + Number(value);
}