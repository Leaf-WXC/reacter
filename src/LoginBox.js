import React,{Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { createMuiTheme } from 'material-ui/styles';

const change = createMuiTheme({
    palette: {
      primary: {
        light: '#FAFAFA',
        main: '#2196F3',
        dark: '#B71C1C',
      },
      secondary: {
        light: '#E0E0E0',
        main: '#9E9E9E',
        dark: '#424242',
      },
    },
  });

const styles =theme=>({
    root:{
        flexGrow: 1,
        display:'flex',
        justifyContent: 'center',
        height:580,
        alignItems:'center',

    },
    box:{
        width:430,
        height:380,
    },
    content1:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        height:185,
        backgroundColor:change.palette.primary.dark,

    },
    content1_1:{
        width:'100%',
        height:40,
        fontSize:40,
        textAlign: 'center',
        color:change.palette.primary.light,

    },
    content2:{
        width:'100%',
        height:195,
        backgroundColor:change.palette.secondary.light,
    },
    content2_1:{
        display:'flex',
        justifyContent: 'center',
        fontWeight:'bold',
        alignItems:'center',
        marginBottom:5,

    },
    content2_2:{
        display:'flex',
        justifyContent: 'center',
        fontWeight:'bold',
        alignItems:'center',
    },
    content2_3:{
        display:'flex',
        justifyContent: 'center',
    },
    content2_4:{
        display:'flex',
        justifyContent: 'center', 
    },
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1.2px solid #ced4da',
        borderColor:'#212121',
        fontSize: 16,
        margin:'0 0 4 0' ,
        width: 'calc(100% - 60px)',
        transition: theme.transitions.create('border-color'),
        '&:focus': {
          borderColor: '#80bdff',
        },
    },
    button:{
        width:257,
    },
    checkbox1:{
        width:18,   
    },
    checkbox2:{
        width:18,  
    },
    formControlLabel:{
        marginRight:55,
        marginLeft:-10,
    },
    a:{
        textDecoration: 'none',
    }
}) 

class LoginBox extends Component{
    render(){
        const { classes } =this.props;
        return (
            <div className={classes.root}>
            <div className={classes.box}>
            <div className={classes.content1}>
            <div className={classes.content1_1}>登陆框</div>
            </div>
            <div className={classes.content2}>
            &nbsp;
            <div className={classes.content2_1}>  
            <TextField   InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.textFieldInput,
          },
        }}/>&nbsp;<a href="http://localhost:3000/" className={classes.a}>注册账号</a>
            </div>
            <div className={classes.content2_2}>
            <TextField  InputProps={{
             disableUnderline: true,
             classes: {
             input: classes.textFieldInput,
              },
              }}/>&nbsp;<a href="http://localhost:3000/" className={classes.a}>找回密码</a>
            </div>
            <div className={classes.content2_3}>
            <FormGroup row>
            <FormControlLabel className={classes.formControlLabel} control={<Checkbox className={classes.checkbox1}/>} label="记住密码" />
            <FormControlLabel className={classes.formControlLabel} control={<Checkbox className={classes.checkbox2}/>} label="自动登陆" /> 
            </FormGroup>           
            </div>
            <div className={classes.content2_4}>
            <Button variant="raised" color="primary" size="large" className={classes.button} >登陆</Button>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default withStyles(styles,change)(LoginBox);