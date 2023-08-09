export class ImageAnalysis {
    image_id!: string;
    labels!: [
        {
            Name: string;
            Confidence: number;
            Instances: [];
            Parents: [object]
        }
    ];
    moderation_labels!: [];
    vendor!: string;
    approved!: number;
    rejected!: number
}
