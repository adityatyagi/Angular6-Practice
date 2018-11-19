export interface Universities {
    _id: string;
    name: string;
    courses: string[];
    colleges: string[];
    branches: string[];
    semesters: string[];
    subjects: [
      {
        branch: string[]
      }
    ];
}
