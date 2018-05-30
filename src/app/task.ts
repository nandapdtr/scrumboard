export interface Task {
    _id?: string,
    taskId: number,
    title: string,
    description: string,
    storyPoints: string,
    issueType: IssueType,
    status: string
}

export interface TaskObj {
    backlog?: Task[],
    plan?: Task[],
    develop?: Task[],
    test?: Task[],
    deploy?: Task[],
    done?: Task[]
}

export interface IssueType{
    key: string,
    value: string
}