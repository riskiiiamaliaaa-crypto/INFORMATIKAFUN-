
export type ClassName = "VII.1" | "VII.2" | "VIII.1" | "VIII.2" | "IX.1" | "IX.2" | "IX.3";
export type GradeMode = "formatif" | "sumatif" | "inisiatif";
export type AttendanceStatus = 'H' | 'S' | 'I' | 'A' | null;

export interface GradeConfig {
    count: number;
    label: string;
}

export interface LevelConfig {
    formatif: GradeConfig;
    sumatif: GradeConfig;
    inisiatif: GradeConfig;
}

export interface Topic {
    title: string;
    icon: string;
}

export interface JournalEntry {
    pokok: string;
    uraian: string;
    timestamp: number;
}
