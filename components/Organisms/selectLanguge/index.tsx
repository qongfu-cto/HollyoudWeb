import {
  Box,
  Button,
  Chip,
  ClickAwayListener,
  InputBase,
  Stack
} from '@mui/material';
import QButton from 'components/Atoms/button';
import QMenu from 'components/Atoms/menu';
import QSearchBar from 'components/Atoms/QSearchBar';
import QText from 'components/Atoms/text';
import { Menu } from 'components/Organisms/profileBacicInfo/profileInputs';
import React, { useCallback, useEffect, useState } from 'react';
import { Branding } from 'utilities/branding';
import { useSelectLanguageStyles } from './style';
import arrow from '../../../assets/icons/dropdown-solid.svg';
import QIcon from 'components/Atoms/icon';
import QCustomDropDownContainer from '../../Molecules/QCustomDropDownContainer';
import SearchDropDownItem from '../../Molecules/QCustomDropDownContainer/searchDropDownItems';
import cross from 'assets/icons/black-cross.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { isEmpty } from 'lodash';
import QDropDownInputBox from 'components/Atoms/QDropDownInputBox';

function SelectLanguage({ handleInputsChange, value }: any) {
  // const data = [
  //   { id: 1, label: 'ARABIC' },
  //   { id: 2, label: 'ENGLISH' },
  //   { id: 3, label: 'SPANISH' },
  //   { id: 4, label: 'CHINESE' },
  //   { id: 5, label: 'JAPANESE' }
  // ];
  const { languages } = useSelector((state: RootState) => {
    return {
      languages: state.app.languages
    };
  });

  const [data, setData] = useState<{ value: number; label: string }[]>([
    { value: 0, label: '' }
  ]);
  const [count, setCount] = useState(1);
  const styles = useSelectLanguageStyles();
  const [addList, setAddList] = useState<string[]>([]);
  const [addList2, setAddList2] = useState<any[]>([]);
  const [list, setList] = useState<{ value: any; label: string }[]>(data);
  const [label, setLabel] = useState('');
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (count === 1) {
      data.pop();
      if (!isEmpty(languages)) {
        languages?.map((language: any) => {
          data?.push({ value: language._id, label: language.language });
        });
        setCount(2);
      }
    }
    if (count === 2) {
      if (!isEmpty(value)) {
        console.log('value', value);
        value?.map((V: any) => {
          addList.push(V.language);
          addList2.push(V._id);
          handleInputsChange([...addList2], 'language');
        });
        setCount(3);
      }
    }
  }, [
    addList,
    addList2,
    count,
    data,
    handleInputsChange,
    id,
    languages,
    value
  ]);

  // const menuClickHandler = useCallback(index => {
  //   setLabel(list[index].label);
  //   setId(list[index].id);
  //   setOpen(false);
  // }, []);

  const addLanguage = () => {
    console.log('onClick label ', label);
    console.log('onClick id ', id);
    console.log(isEmpty(label));
    setSelected([]);
    if (!isEmpty(label)) {
      const included = addList.includes(label);
      if (included) {
        console.log('include');
        return;
      } else {
        console.log('not include');
        setAddList([...addList, label]);
        setAddList2([...addList2, id]);
        handleInputsChange([...addList2, id], 'language');
        setLabel('');
      }
    }
  };

  const onClick = (value: any) => {
    if (!isEmpty(value)) {
      setSelected(value);
      const included = addList.includes(value[0].label);
      if (included) {
        console.log('include');
        setLabel('');
      } else {
        setLabel(value[0].label);
        setId(value[0].value);
      }
    }
  };

  // const onChange = (e: any) => {
  //   const text = e.target.value;
  //   const search = list.filter(i =>
  //     i.label.toUpperCase().includes(text.toUpperCase())
  //   );

  //   setList(search);
  //   setLabel(text);
  //   setOpen(true);
  // };

  const onRemove = (label: string, i: number) => {
    console.log(label);
    console.log(addList2[i]);
    const remove = addList.filter(title => title !== label);
    const removeId = addList2.filter(ids => ids !== addList2[i]);

    console.log('removeId', removeId);
    setAddList(remove);
    setAddList2(removeId);
    handleInputsChange(removeId, 'language');
  };

  // useEffect(() => {
  //   if (!label) {
  //     setList(data);
  //   }
  // }, [label]);

  return (
    <div style={{ margin: 5, marginTop: 15 }}>
      <QText
        label="LANGUAGES"
        labelStyle={{
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 4,
          color: Branding.Colors.black[60]
        }}
      />
      <section className={styles.section}>
        {addList?.map((l, i) => (
          <div key={i} className={styles.tag}>
            <Stack direction="row" spacing={1}>
              <Chip
                label={l}
                variant="outlined"
                onDelete={() => onRemove(l, i)}
              />
            </Stack>
            {/* <QText
              label={l}
              labelStyle={{
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 4,
                color: Branding.Colors.black[100]
              }}
            />
            <QIcon source={cross} click={} /> */}
          </div>
        ))}
      </section>
      <section className={styles.searchSection}>
        <Box>
          <QDropDownInputBox
            onSelectChange={onClick}
            options={list}
            containerStyle={{
              height: 48,
              width: 307,
              marginTop: 5,
              borderRadius: 8,
              fontFamily: 'Roboto',
              fontSize: 16,
              backgroundColor: Branding.Colors.white,
              border: '0.5px solid e5e5e5'
            }}
            placeholder={'Search Language '}
            create={false}
            multi={false}
            value={selected}
          />
        </Box>
        {/* <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
            <div className={styles.search}>
              <InputBase
                value={label}
                placeholder={'Search Language'}
                onClick={() => setOpen(true)}
                endAdornment={<QIcon source={arrow} />}
                //setOpenHotspots(true)}
                // onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => {
                //   if (e.key === 'Enter') {
                //     handleEnterClicked();
                //   }
                // }}
                onChange={onChange}
                // value={value}
              />
            </div>

            <div>
              {open && (
                <QCustomDropDownContainer
                  width={324}
                  height={118}
                  position={'relative'}
                  searchDropDownItemProps={
                    <SearchDropDownItem
                      dropDownArray={list}
                      onClick={menuClickHandler}
                    />
                  }
                />
              )}
            </div>
          </div>
        </ClickAwayListener> */}
        <Button
          onClick={addLanguage}
          variant={'contained'}
          disableElevation
          classes={{
            root: styles.addButton,
            disabled: styles.disabledAddButton
          }}
          disableRipple
          disabled={isEmpty(label)}
        >
          {'ADD'}
        </Button>
        {/* <Button
          disableElevation
          style={
            isEmpty(label)
              ? {
                  width: 136,
                  borderRadius: 12,
                  // borderColor: Branding.Colors.black[16],
                  marginLeft: 20,
                  height: 40,
                  marginTop: 5,
                  color: Branding.Colors.white,
                  backgroundColor: Branding.Colors.primary.normal
                }
              : {
                 
                }
          }
          variant="contained"
          // onClick={backAction}
        >
          ADD
        </Button> */}
      </section>
    </div>
  );
}

export default SelectLanguage;
