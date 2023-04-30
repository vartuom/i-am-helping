export type TChatProps = {
    id: number;
    person_name: string | null;
    phone: string | null,
    person_img: string,
    messages: string,
    text: string,
    files: boolean,
    is_approvable: boolean;
    onApproveClicked?: ((id: number) => void);
    onDeleteClicked?: ((id: number) => void);
}
