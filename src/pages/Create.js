import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useNavigate } from 'react-router-dom';




const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
  });


const Create = () => {
    const classes = useStyles();
    const navigate =useNavigate();
    const [title,setTitle]=useState('');
    const [details,setDetails]=useState('');
    const [titleError,setTitleError]=useState(false);
    const [detailsError,setDetailsError]=useState(false);
    const [category, setCategory] = useState('money')
   
    const handleSubmit =(e)=>{
        e.preventDefault()
        setDetailsError(false)
        setTitleError(false)

        if(title ===''){
            setTitleError(true)
        }
        if(details ===''){
            setDetailsError(true)
        }

        if (title && details){
            fetch('http://localhost:8000/notes', {
              method: 'POST',
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({ title, details, category })
            }).then(() => navigate('/'))
            }
        }
        
  return (  
    <>
        <Container size="sm">

        <Typography 
            variant="h3"
            color="textSecondary"
            gutterBottom
            >
                Create a Note        
         </Typography> 
         <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
            onChange={(e)=>setTitle(e.target.value)}
            style={{ margin: '10px' }}
             id="outlined-basic" 
             label="Notes Title" 
             variant="outlined"
             fullWidth
             required
             error={titleError}
            />

            <TextField
            onChange={(e)=>setDetails(e.target.value)}
            style={{ margin: '10px' }}
             id="outlined-basic" 
             label="Details" 
             variant="outlined"
             multiline
             rows={4}
             fullWidth
             required
             error={detailsError}
            />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>


         <Button
         type="submit"
         variant='contained'
         >
            Submit
         </Button>
         </form>

         </Container>   
    </>
  );
}

export default Create;
