import {StyleSheet} from 'react-native';

export const searchStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  outerContainer: {
    flex: 1,
  },
  inputField: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginTop: 28,
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#FCFCFF',
    fontsize: 14,
    fontFamily: 'DMSans-Medium',
    paddingLeft: 20,
  },
  browserText: {
    color: '#161719',
    fontSize: 14,
    fontFamily: 'DMSans-Bold',
    marginVertical: 18,
    fontWeight: 'bold',
  },
  listWarp: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    color: '#FCFCFF',
    fontSize: 10,
    fontFamily: 'DMSans-Medium',
    backgroundColor: '#6360FF',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 30,
    marginRight: 17,
    marginBottom: 15,
  },
});
