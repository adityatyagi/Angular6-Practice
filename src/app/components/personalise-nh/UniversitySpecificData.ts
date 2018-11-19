export interface UniversitySpecificData {
    '_id': string;
    'name': string;
    'colleges': string[];
    'courses': [
        {
            '_courseId': string;
            '_courseName': string;
            '_branches': [
                {
                    '_branchId': string;
                    '_branchName': string;
                    '_semesters': [
                        {
                            '_semesterId': string;
                            'semesterNumber': string;
                            '_subejcts': string[];
                        }
                    ]
                }
            ]

        }
    ];
}
