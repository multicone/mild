import { Container, Modal } from "components"
import { Select } from "components/select"
import { useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { artifacts, classNames } from "utils"
import { Activity, Filters, Panel, Tags } from "./tabs"

const tabs = ['owned', 'created', 'collected', 'onsale', 'activity']
const items = ['Recent', '1 day', '7 days', '30 days', '90 days']


export const Tabs = () => {
    const { id, type } = useParams()
    const [selected, setSelected] = useState<string>(items[0])
    return (
        <Container>
            <div className="flex items-center justify-between">
                <Filters />
                <Select selected={selected} setSelected={setSelected} items={items} />
            </div>

            <Panel />
        </Container>
    )
}
