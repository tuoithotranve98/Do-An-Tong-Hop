import React,{useEffect,useState} from 'react'
import { Grid, InputLabel, Input, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import FormGroup  from '@material-ui/core/FormGroup';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import { setViewEditUser, checkUserThanhToan ,fetchEditUser} from './../../../actions/userAction';
import { history } from './../../../reducers/history';
function ThongTinTaiKhoan({stateViewThongTinUser,setViewEditUser,viewEditUser,fetchEditUser,actCheckUserThanhToan,user}) {
    const classes = useStyles();
    // const user=JSON.parse(localStorage.getItem('USER'))
    const [stateUser, setStateUser] = useState({
        id:user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        phone:user.phone,
        cmnd: user.cmnd,
        sex: user.sex,
        address: user.address,
        job: user.job,
    })
    // useEffect (()=>{
    //     return () => { }
    // },[])
    const onClickXacNhan  = () => {
        history.push("/cart");
        actCheckUserThanhToan()
    }
    const handleChange = (event) => {
        console.log(stateUser);
        const { name, value } = event.target;
        setStateUser({ ...stateUser, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchEditUser(stateUser)
        setViewEditUser()
       
    }
    const onClickEdit  = () => {
        setViewEditUser()        
    }
    const View  = () => {
       
        if(!stateViewThongTinUser){
            return(
                <Grid className={classes.root}>
                    <Typography variant="h5" className={classes.title}>Thông Tin Cá Nhân</Typography>
                    <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
                    <form name="form" onSubmit={handleSubmit}>
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Email address: </InputLabel> 
                             {viewEditUser ? <Grid  className={classes.text_info_detail} >{user?user.email:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}
                             <Typography variant="caption" onClick={()=>onClickEdit()} style={{marginLeft:60,color:'#21beff',fontSize: 15,}}>
                                <i className="fas fa-edit" style={{marginRight:5}}></i>
                                Cập nhật
                            </Typography> 
                             </Grid> 
                            : 
                            <Grid>
                               <input type="email" name="email" value={stateUser.email} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Nhập địa chỉ email" className={classes.input} /> 
                            </Grid>
                            }
                       
                           
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Username: </InputLabel> 
                        
                        {viewEditUser ? <Grid  className={classes.text_info_detail} >{user?user.username:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                               <input type="text" name="username" value={stateUser.username} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Nhập username" className={classes.input} /> 
                            </Grid>
                            }
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Họ và tên: </InputLabel> 
                        
                        {viewEditUser ? <Grid  className={classes.text_info_detail} >{user?user.name:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                                <input type="text" name="name" value={stateUser.name} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Nghề nghiệp" className={classes.input} /> 
                            </Grid>
                            }
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Số điện thoại: </InputLabel> 
                        
                        {viewEditUser ? <Grid  className={classes.text_info_detail} >{user?user.phone:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                                <input type="text" name="phone" value={stateUser.phone} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Nghề nghiệp" className={classes.input} /> 
                            </Grid>
                        }
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Số chứng minh nhân dân: </InputLabel> 
                        {viewEditUser ? <Grid > {user.cmnd?<Grid  className={classes.text_info_detail} >{user.cmnd}</Grid>:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                               <input type="text" name="cmnd" value={stateUser.cmnd} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Số chứng minh nhân dân" className={classes.input} /> 
                            </Grid>
                            }
                        
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Giới tính:</InputLabel> 
                        {viewEditUser ?  <Grid > {user.sex?<Grid  className={classes.text_info_detail} >{user.sex}</Grid>:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                               <input type="text" name="sex" value={stateUser.sex} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Giới tính" className={classes.input} /> 
                            </Grid>
                            }
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Địa chỉ:</InputLabel> 
                        {viewEditUser ?  <Grid > {user.address?<Grid  className={classes.text_info_detail} >{user.address}</Grid>:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                               <input type="text" name="address" value={stateUser.address} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Địa chỉ" className={classes.input} /> 
                            </Grid>
                            }
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Nghề nghiệp:</InputLabel> 
                        {viewEditUser ?  <Grid > {user.job?<Grid  className={classes.text_info_detail} >{user.job}</Grid>:<Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>}</Grid>
                            : 
                            <Grid>
                               <input type="text" name="job" value={stateUser.job} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Nghề nghiệp" className={classes.input} /> 
                            </Grid>
                            }
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input"></InputLabel> 
                        {viewEditUser ?  <Grid></Grid>
                            : 
                            <Grid>
                                <Button
                                variant="contained"
                                type="submit"
                                className={classes.buttonSave}
                                >
                                Cập nhật
                                </Button>
                                <Button
                                variant="outlined"
                                onClick={()=>onClickEdit()}
                                className={classes.buttonCancel}
                                >
                                Quay lại
                                </Button>
                            </Grid>
                            }
                    </FormGroup >
                    </form>
                </Grid>
            )
        }else{
            return ( 
                <Grid className={classes.root}>
                    <Typography variant="h5" className={classes.title}>Điền Mã Xác Thực Đã Được Shop Gửi tới Email</Typography>
                    <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
                
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Mã xác thực: </InputLabel> 
                        <InputBase
                            placeholder="Nhập mã xác thực..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                
                            }}
                            type="text"
                            inputProps={{ 'aria-label': 'search' } }
                        />
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input"></InputLabel> 
                        <Grid>Mã xác thực không chính xác vui lòng thử lại !</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input"></InputLabel> 
                        <Button
                        onClick={()=>onClickXacNhan()}
                        variant="contained"
                        classes={{
                            root: classes.buttonXacNhan,
                            container: classes.buttonContainerXacNhan,
                        }}
                        >
                        Xác nhận
                        </Button>
                        <Button
                        variant="outlined"
                        classes={{
                            root: classes.buttonGuiLai,
                            container: classes.buttonContainerGuiLai,
                            
                        }}
                    
                        >
                        Gửi lại
                        </Button>
                    </FormGroup >
                </Grid>
            )
        }
    }
    return (
       <View></View>

    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stateViewThongTinUser: state.cartReducer.stateViewThongTinUser,
        viewEditUser: state.userReducer.viewEditUser,
        checkUserThanhToan: state.userReducer.checkUserThanhToan,
        user: state.loginReducer.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setViewEditUser: () => {
            dispatch(setViewEditUser())
        },
        actCheckUserThanhToan: () => {
            dispatch(checkUserThanhToan())
        },
        fetchEditUser: (user) => {
            dispatch(fetchEditUser(user))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTaiKhoan)