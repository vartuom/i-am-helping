export type TChatProps = {
    // person_name: string;
    // phone: string;
    // text?: string;
    // files?: string;
    id: number;
    person_name: string | null;
    phone: string | null,
    person_img: string,
    messages: never[string],
    message: string | null,
    text: string | null;
    files: string | null;
    is_approvable: boolean;
    onApproveClicked?: ((id: number) => void);
    onDeleteClicked?: ((id: number) => void);
    onCallClicked: (() => void)
}
