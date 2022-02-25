import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import navigationStrings from './navigationStrings';
import ImageUrls from '../../appConstants/imageUrls';
import Constants from '../../appConstants/appConstants';

export function DrawerContent(props) {
  const [expanded, setExpanded] = React.useState(true);
  const {homeD, daily, right, electronics, Sshoes, cosmetics} = ImageUrls;
  const {navigation} = props;
  const {HOMEDECOR, ELECTRONICS, SHOES, DAILYUSE, COSMETICS} = Constants.Title;
  const {
    BEDSHEETS,
    CURTAINS,
    PAINTINGS,
    PILLOWS,
    SOFAS,
    AC,
    LAPTOPS,
    MICROWAVE,
    PHONE,
    REFRIGERATORS,
    WASHINGMACHINES,
    BOOTS,
    HEELS,
    SLIPPERS,
    SNEAKERS,
    BAGS,
    SANITIZERS,
    SHAMPOO,
    TOWEL,
    WATCH,
    WATERBOTTLE,
    MAKEUP,
    LIPSTICKS,
  } = Constants.SUB_CATEGORIES;
  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView style={{flex: 1}}>
      <List.Accordion
        title={HOMEDECOR}
        style={styles.drawerSection}
        expanded={expanded}
        onPress={handlePress}
        left={() => <List.Icon icon={homeD} />}
        right={() => <List.Icon icon={right} />}>
        <List.Item
          title={BEDSHEETS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: BEDSHEETS,
            });
          }}
        />
        <List.Item
          title={CURTAINS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: CURTAINS,
            });
          }}
        />
        <List.Item
          title={PAINTINGS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: PAINTINGS,
            });
          }}
        />
        <List.Item
          title={PILLOWS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: PILLOWS,
            });
          }}
        />
        <List.Item
          title={SOFAS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: SOFAS,
            });
          }}
        />
      </List.Accordion>
      <List.Accordion
        title={ELECTRONICS}
        style={styles.drawerSection}
        left={() => <List.Icon icon={electronics} />}
        right={() => <List.Icon icon={right} />}>
        <List.Item
          title={AC}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: AC,
            });
          }}
        />
        <List.Item
          title={LAPTOPS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: LAPTOPS,
            });
          }}
        />
        <List.Item
          title={MICROWAVE}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: MICROWAVE,
            });
          }}
        />
        <List.Item
          title={PHONE}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: PHONE,
            });
          }}
        />
        <List.Item
          title={REFRIGERATORS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: REFRIGERATORS,
            });
          }}
        />
        <List.Item
          title={WASHINGMACHINES}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: WASHINGMACHINES,
            });
          }}
        />
      </List.Accordion>
      <List.Accordion
        title={SHOES}
        style={styles.drawerSection}
        left={() => <List.Icon icon={Sshoes} />}
        right={() => <List.Icon icon={right} />}>
        <List.Item
          title={BOOTS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: BOOTS,
            });
          }}
        />
        <List.Item
          title={HEELS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: HEELS,
            });
          }}
        />
        <List.Item
          title={SLIPPERS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: SLIPPERS,
            });
          }}
        />
        <List.Item
          title={SNEAKERS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: SNEAKERS,
            });
          }}
        />
      </List.Accordion>
      <List.Accordion
        title={DAILYUSE}
        style={styles.drawerSection}
        left={() => <List.Icon icon={daily} />}
        right={() => <List.Icon icon={right} />}>
        <List.Item
          title={BAGS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: BAGS,
            });
          }}
        />
        <List.Item
          title={SANITIZERS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: SANITIZERS,
            });
          }}
        />
        <List.Item
          title={SHAMPOO}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: SHAMPOO,
            });
          }}
        />
        <List.Item
          title={TOWEL}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: TOWEL,
            });
          }}
        />
        <List.Item
          title={WATCH}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: WATCH,
            });
          }}
        />
        <List.Item
          title={WATERBOTTLE}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: WATERBOTTLE,
            });
          }}
        />
      </List.Accordion>
      <List.Accordion
        title={COSMETICS}
        style={styles.drawerSection}
        left={() => <List.Icon icon={cosmetics} />}
        right={() => <List.Icon icon={right} />}>
        <List.Item
          title={LIPSTICKS}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: LIPSTICKS,
            });
          }}
        />
        <List.Item
          title={MAKEUP}
          onPress={() => {
            navigation.navigate(navigationStrings.PRODUCTSlist, {
              sub_category: MAKEUP,
            });
          }}
        />
      </List.Accordion>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  drawerSection: {
    height: 60,
    justifyContent: 'center',
  },
});
