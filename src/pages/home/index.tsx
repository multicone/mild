import { Badge, Variant } from "components/badge"
import { Button } from "components/button"
import { Input } from "components/input"
import { List } from "components/list"
import { Switch } from "components/switch"
import { Tooltip } from "components/tooltip"
import { useState } from "react"
import { Form, Formik, FormikProps } from 'formik'
import { Select } from "components/select"
import { ModeSwitcher } from "components/switcher"
import 'filepond/dist/filepond.min.css'
import { FileInput, } from "components/fileupload"

const items = ['ans', 'wer', 'tpewwr']

type Item = {
    name: string
    [key: string]: any
}

const people: Item[] = [
    { name: 'something' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]
enum constant {
    username = 'username',
    email = 'email'
}

interface Form {
    [constant.email]: string
    [constant.username]: string
}

export const Home = () => {
    const [counter, setCounter] = useState<number>(0)
    const [on, setOn] = useState<boolean>(false)
    const [selected, setSelected] = useState(people[0])
    return (
        <div className="h-screen">
            <div>{counter}</div>
            <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
            <Button onClick={() => setCounter(counter - 1)}>Decrease</Button>
            <List items={items} renderItem={renderList} />
            <Badge variant={Variant.primary}>Moderator</Badge>
            <Badge variant={Variant.secondary}>Moderator</Badge>
            <Badge variant={Variant.success}>Moderator</Badge>

            <div className="center h-2 w-2 rounded-full bg-green-500">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
            </div>
            <div className="apart mx-5">
                <h4 className="text-sm text-slate-600 font-medium">Agree to the terms and conditions</h4>
                <Switch checked={on} onChange={setOn} />
            </div>
            <Badge variant={Variant.warning}>Moderator</Badge>
            <Tooltip direction="top" content="telegrams">
                <Button>Hello dear</Button>
            </Tooltip>
            <Tooltip direction="right" content="telegrams">
                <Button>Hello dear</Button>
            </Tooltip>
            <Tooltip direction="right" content="telegrams">
                <Button>Hello dear</Button>
            </Tooltip>
            <ModeSwitcher />
            <Formik
                initialValues={{ [constant.username]: '', [constant.email]: '' }}
                onSubmit={(values: Form) => { console.log('username', values[constant.username]) }}>
                {({ values, handleChange, handleBlur, errors }: FormikProps<Form>) => (
                    <>
                        <Input placeholder="username" name={constant.username} value={values[constant.username]} error={errors[constant.username] || 'Must provide username'} onChange={handleChange} onBlur={handleBlur} />
                        <Input type={'number'} placeholder="enter number" name={constant.username} value={values[constant.username]} onChange={handleChange} onBlur={handleBlur} />
                        <Button className="w-full" onClick={() => { }}>{values[constant.username]}</Button>
                    </>
                )}
            </Formik>
            <FileInput />
            <Select data={people} selected={selected} setSelected={setSelected} />
        </div>
    )
}

const renderList = (item: any) => <h1>{JSON.stringify(item)}</h1>