import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import LoginBox from './LoginBox';


const drawerWidth = 240;

const styles = {
  root: {
    flexGrow: 1,

  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerPaper: {
    width: drawerWidth
  },


};

class Title1 extends Component{
  render(){
      return <main>我是谁？</main>
  }
}

class Title2 extends Component{
  render(){
      return <main>我在哪？</main>
  }
}

class Title3 extends Component{
  render(){
      return <main>我要做什么？</main>
  }
}



class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open1:false,
      open2: false,
      open3: false,
    };
  }


  handleToggle = () => this.setState({open: !this.state.open});
 
  handleClick1 = () => this.setState({open1: !this.state.open1});

  handleClick2 = () => this.setState({open2: !this.state.open2});

  handleClick3 = () => this.setState({open3: !this.state.open3});

  render() {
    const { classes } =this.props;
  if(!this.state.open1&&!this.state.open2&&!this.state.open3){
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"  onClick={this.handleToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer classes={{ paper: classes.drawerPaper}} open={this.state.open} onClose={this.handleToggle} >
          <MenuItem onClick={this.handleClick1}> 登陆 </MenuItem>
          <MenuItem onClick={this.handleClick2}> 功能2 </MenuItem>
          <MenuItem onClick={this.handleClick3}> 功能3 </MenuItem>
        </Drawer>
        <LoginBox/>

    </div>
  );
}
else {
  if(this.state.open1)
{
  return <Title1/> ;
}
  if(this.state.open2)
{
  return <Title2 /> ;
}
  if(this.state.open3)
{
  return <Title3 /> ;
}
}
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  withStyles(styles)(ButtonAppBar);
