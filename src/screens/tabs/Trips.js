import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['#', 'Location', 'Pump. A','Client', 'Truck #', 'Product', 'Fuel(Lts)', 'Price(Tsh)', 'Date'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 6; i += 1) {
      const rowData = [];
      for (let j = 0; j < 10; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.dataText}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#edf1f2',
  height: '100%', },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100',color:'#fff' },
  dataText:{ textAlign: 'center', fontWeight: '100'},
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});