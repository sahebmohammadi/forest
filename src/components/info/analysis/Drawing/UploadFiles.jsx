import { DropzoneArea } from 'material-ui-dropzone';
// import classes from './uploadFiles.module.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import iconUpload from '../../../../assets/images/iconUpload.svg';

const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#00A594',
    },
    secondary: {
      main: '#747070',
    },
    error: {
      main: '#FD5944',
    },
  },
  typography: {
    fontFamily: ['IRANSans', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ',',
    ),
  },
  overrides: {
    MuiDropzonePreviewList: {
      image: {
        maxWidth: 'none',
        // width: '100px',
        // height: 'auto',
        // zIndex : '999'
        position: 'absolute',

        top: '-72px',
        right: '31px',
        width: '184px',
        height: '104px',
      },
      imageContainer: {
        marginTop: '10px',
      },
    },
    previewGrid: {
      // marginTop: '30px',
    },
    MuiDropzoneArea: {
      root: {
        minHeight: 'none',
        borderRadius: '10px',
        border: 'dashed  2px #C1C0C0',
        backgroundColor: '#FAFAFA',
        width: '100%',
        // height: '104px !important',
        opacity: '0.5',
        padding:"15px 0 70px 0"
      },
      text: {
        margin: '0px auto !important',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
      },
    },
    MuiTypography: {
      h5: {
        fontSize: '12px !important',
        fontFamily: 'Shabnam',
      },
    },
    MuiDropzoneSnackbar: {
      errorAlert: {
        backgroundColor: '#efefef',
        color: 'red',
      },
      successAlert: {
        backgroundColor: 'green',
        color: '#fff',
      },
    },
  },
});

const UploadFiles = ({ label, hint, setUploadedData, initialImage }) => {
  const handleChange = (files) => {
    setUploadedData(files[0]);
  };
  const icon = () => <img src={iconUpload} alt="uploadIcon" style={{marginTop:"0"}} />;
  const HandleGetFileAddedMessage = (files) => {
    return `${files} با موفقیت بار گذاری شد`;
  };
  const HandleGetFileRemovedMessage = (files) => {
    return `${files} با موفقیت حذف شد`;
  };

  const text = (
    <pre>{`
شیپ خود را به اینجا بکشید
یا
برای آپلود کلیک کنید
`}</pre>
  );

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <div className="">
          {typeof initialImage === 'string' ? (
            <div className="">
              <img src={initialImage} alt=""></img>
            </div>
          ) : null}
          <label>
            {label} <div style={{fontSize:"11px", margin:"20px 0", color: 'red !important' }}>یا</div>
          </label>
          <div className="">
            <DropzoneArea
              showPreviewsInDropzone={true}
              variant="default"
              previewText=""
              previewGridClasses={{ container: 'previewGrid' }}
              showFileNames={true}
              filesLimit={1}
              Icon={icon}
              dropzoneText={text}
              acceptedFiles={['image/*']}
              onChange={(files) => handleChange(files)}
              getFileAddedMessage={HandleGetFileAddedMessage}
              getFileRemovedMessage={HandleGetFileRemovedMessage}
              initialFiles={initialImage ? [initialImage] : null}
            >
              یا
            </DropzoneArea>
          </div>
        </div>
      </MuiThemeProvider>
    </>
  );
};

export default UploadFiles;
