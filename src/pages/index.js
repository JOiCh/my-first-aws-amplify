import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Layout from "./Layout";
import { useTodoList } from "../hook/useTodo";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import useApiTodo from "../api/useApiTodo";
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { pink } from '@mui/material/colors';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';


export const HomePage = () => {
    const { todolist, getTodo } = useTodoList([])
    useEffect(() => {
        getTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Layout>
            <Box>
                <Stack spacing={2}>
                    { todolist.map((todoItem, index) => (
                        <TodoItem key={JSON.stringify(todoItem)} item={todoItem} updateList={() => getTodo()} />
                    ))
                    }
                    <AddTodoItem updateList={() => getTodo()} />
                </Stack>
            </Box>
        </Layout>
    )
}

const TodoItem = ({item, updateList=f=> f}) => {
    const [isEdit, setisEdit] = useState(false)
    const handleConfirm = () => {
        setisEdit(false)
        updateList()
    }
    return (
        isEdit ? <ItemEditCard isAddEvent={false} item={item} confirmEvent={() => handleConfirm()} cancelEvent={() => setisEdit(false)} /> : <ItemCard item={item} changeToEdit={() => setisEdit(true)} deleteEvent={() => updateList()} />
    )
}

const ItemCard = ({item, changeToEdit = f=>f, deleteEvent=f=> f}) => {
    const { putTodo, deleteTodo } = useApiTodo()
    const [currentItem, setcurrentItem] = useState(item)
    const [isLoading, setisLoading] = useState(false)
    const [expanded, setexpanded] = useState(false)
    const handleChangeStatus = () => {
        setisLoading(true)
        if (currentItem.status === 'todo') {
            setcurrentItem((item) => ({...item, status: 'done'}))
            putTodo({...currentItem, status: 'done'}).finally(() => setisLoading(false))
        } else {
            setcurrentItem((item) => ({...item, status: 'todo'}))
            putTodo({...currentItem, status: 'todo'}).finally(() => setisLoading(false))
        }
    }
    const handleDelectItem = async () => {
        await deleteTodo({title: currentItem.title})
        deleteEvent()
    }
    return (
        <Card>
            <CardHeader
            avatar={<ItemCardStateArea state={currentItem.status} isLoading={isLoading} handleChangeStatus={handleChangeStatus} />}
            title={currentItem.title}
            subheader={new Date(currentItem.dueTime).toString()}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="more content" onClick={()=> changeToEdit()}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="more content" onClick={() => handleDelectItem()}>
                    <DeleteIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}></Box>
                <IconButton aria-label="more content" onClick={() => setexpanded((status) => !status)}>
                    <ExpandMoreIcon  style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body1" color="initial">
                        {currentItem.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

const ItemCardStateArea = ({state, isLoading, handleChangeStatus = f => f}) => {
    return (
        <>
            <Button
                disabled={isLoading}
                variant={state === 'done' ? 'contained' : 'outlined'}
                color="primary"
                onClick={handleChangeStatus}
            >
                {state}
            </Button>
        </>
    )
}

const ItemEditCard = ({item = {status: 'todo', dueTime: new Date()}, isAddEvent = true, confirmEvent = f=>f , cancelEvent =f => f}) => {
    const { putTodo, postTodo, getTodo } = useApiTodo()
    const [currentDescription, setcurrentDescription] = useState(item.description)
    const [currentTitle, setcurrentTitle] = useState(item.title)
    const [currentDueTime, setcurrentDueTime] = useState(new Date(item.dueTime))
    const [currentStatus, setcurrentStatus] = useState(item.status)
    const [isLoading, setisLoading] = useState(false)

    const handleChangeStatus = () => {
        if (currentStatus.status === 'todo') {
            setcurrentStatus('done')
        } else {
            setcurrentStatus('todo')
        }
    }
    const handleConfirm = async (item) => {
        setisLoading(true)
        if (isAddEvent) {
            await postTodo(item)
        } else {
            await putTodo(item)
        }
        setisLoading(false)
        getTodo()
        confirmEvent()
    }
    return (
        <Card>
            <CardHeader
            avatar={<ItemCardStateArea state={currentStatus} handleChangeStatus={handleChangeStatus} />}
            title={isAddEvent ? 'Add New Item' : 'Edit Cureent Item'}
            />
            <CardContent>
            <Stack spacing={2}>
                <TextField
                  id="title"
                  label="title"
                  value={currentTitle}
                  disabled={!isAddEvent}
                  onChange={(event) => setcurrentTitle(event.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                        value={currentDueTime}
                        onChange={(value) => setcurrentDueTime(value)}
                        renderInput={(params) => <TextField label="dueTime" {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                  id="description"
                  label="description"
                  value={currentDescription}
                  onChange={(event) => setcurrentDescription(event.target.value)}
                />
            </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <Button disabled={isLoading} variant="contained" color="secondary" onClick={() => handleConfirm({title: currentTitle, status: currentStatus, description: currentDescription, dueTime: currentDueTime.getTime()})}>
                    {isLoading ? 'Sending Item' : 'confirm'}
                </Button>
                <Button disabled={isLoading} variant="outlined" color="secondary" onClick={() => cancelEvent()}>
                    Cancer
                </Button>
                <Box sx={{ flexGrow: 1 }}></Box>
            </CardActions>
        </Card>
    )
}

const AddTodoItem = ({updateList =f=> f}) => {
    const [isOpen, setisOpen] = useState(false)
    const handleConfirm = () => {
        setisOpen(false)
        updateList()
    }
    return (
        isOpen ? <ItemEditCard cancelEvent={() => setisOpen(false)} confirmEvent={() => handleConfirm()} /> : <AddTodeItemButtom openNewCard={() => setisOpen(true)}/>
    )
}

const AddTodeItemButtom = ({openNewCard = f=>f}) => {
    return (
        <Button variant="text" color="primary" startIcon={<AddIcon sx={{ color: pink[500] }} />} onClick={() => openNewCard()}>
          New Item
        </Button>
    )
}