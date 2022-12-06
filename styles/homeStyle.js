import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  imgTag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 110,
    paddingHorizontal: 25,
  },
  image: {
    flexDirection: 'row',
  },
  img: {
    width: 40,
    height: 40,
  },
  tag: {
    marginLeft: 20,
  },
  welTag: {
    fontSize: 10,
    fontFamily: 'DMSans-Bold',
    color: '#ffff',
    fontWeight: 'bold',
  },
  nameTag: {
    fontSize: 14,
  },
  container: {
    flex: 1,
  },
  cardTop: {
    marginTop: -80,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'DMSans-Medium',
    color: '#161719',
    maxWidth: 215,
    marginBottom: 6,
  },
  price: {
    fontFamily: 'DMSans-Bold',
    color: '#161719',
    fontWeight: 'bold',
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 60,
  },
  ribbon: {
    width: 35,
    height: 35,
    backgroundColor: '#F1F1FA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  progress: {
    fontSize: 10,
    color: '#91919F',
    fontFamily: 'DMSans-Medium',
  },
  range: {
    fontFamily: 'DMSans-Medium',
    color: '#161719',
  },
  bar: {
    marginTop: 15,
    height: 15,
    backgroundColor: '#F1F1FA',
    borderRadius: 25,
  },
  percentage: {
    marginTop: 0,
    backgroundColor: '#7DC579',
    width: 50,
  },
  text: {
    fontSize: 14,
    fontFamily: 'DMSans-Bold',
    color: '#161719',
    fontWeight: 'bold',
    marginTop: 20,
  },
  innerContainer: {
    marginVertical: 15,
    height: 360,
  },
  cardOuter: {
    paddingBottom: 15,
  },
  cardWarp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerCard: {
    paddingRight: 25,
  },
  detialBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rating: {
    fontFamily: 'DMSans-Bold',
    color: '#161719',
  },
});
