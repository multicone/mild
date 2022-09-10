import { CopyToClipboard } from 'react-copy-to-clipboard'

export const Copy = ({ text }: { text: string }) => {
    return (
        <CopyToClipboard text={text}>

        </CopyToClipboard>
    )
}