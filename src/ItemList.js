import React, { Component } from "react";
import CheckBoxList from './CheckBoxList';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAllSelected: false,
      boxList: [
        {
          value: "Item 1",
          checked: false
        },
        {
          value: "Item 2",
          checked: false
        },
        {
          value: "Item 3",
          checked: false
        },
        {
          value: "Item 4",
          checked: false
        },
        {
          value: "Item 5",
          checked: false
        }
      ]
    };
  }

  onCheckBoxChange(checkName, isChecked) {
    let isAllChecked = (checkName == "all" && isChecked);
    let isAllUnChecked = checkName == "all" && !isChecked;

    const checkBoxes = this.state.boxList.map(item => {
      if (isAllChecked || item.value === checkName) {
        item.checked = !item.checked
      } else if (isAllUnChecked) {
        item.checked = false;
      }
      return item;
    });

    let isAllSelected =
      checkBoxes.find(item => item.checked == false) == null ||
      isAllChecked == true;

    this.setState({
      checkBoxes,
      isAllSelected
    });
  }

  render() {
    return (
      <div>
        <CheckBoxList
          options={this.state.boxList}
          isCheckedAll={this.state.isAllSelected}
          onCheck={this.onCheckBoxChange.bind(this)}
        />
      </div>
    );
  }
}
