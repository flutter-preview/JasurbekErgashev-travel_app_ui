import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import '../components/floating_action_button.dart';
import '../components/bottom_navigation.dart';
import '../components/custom_menu.dart';
import '../components/custom_notifications_bell.dart';
import '../components/custom_widgets.dart';
import '../constants.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: cScaffoldBackgroundColor,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Container(
            margin: const EdgeInsets.all(25.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: const [
                    CustomMenu(),
                    CustomNotificationsIcon(),
                  ],
                ),
                cDefaultHeight,
                const Text(
                  'Explore the',
                  style: cLightHeadingTextStyle,
                ),
                const Text(
                  'Beautiful world!',
                  style: cDarkHeadingTextStyle,
                ),
                cDefaultHeight,
                Row(
                  children: const [
                    CustomSearchBox(),
                    SizedBox(
                      width: 25.0,
                    ),
                    CustomPreferencesIcon(),
                  ],
                ),
                cDefaultHeight,
                const Text(
                  'Categories',
                  style: cSubheadingTextStyle,
                ),
                cDefaultHeight,
                SizedBox(
                  height: 60.0,
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemBuilder: ((context, index) {
                      return Container(
                        width: 140.0,
                        margin: EdgeInsets.only(
                          right: index != cDummyDataSet.length - 1 ? 20.0 : 0.0,
                        ),
                        padding: const EdgeInsets.all(5.0),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20.0),
                          gradient: index == 0
                              ? const LinearGradient(
                                  colors: [
                                    cLightReddishColor,
                                    cDarkReddishColor
                                  ],
                                  begin: Alignment.topCenter,
                                  end: Alignment.bottomCenter,
                                )
                              : const LinearGradient(
                                  colors: [
                                    Colors.white,
                                    Colors.white,
                                  ],
                                ),
                          boxShadow: const [
                            BoxShadow(
                              color: cVeryLightGreyColor,
                              spreadRadius: -10.0,
                              blurRadius: 10.0,
                              offset: Offset(1.0, 3.0),
                            ),
                          ],
                        ),
                        child: Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.all(5.0),
                              decoration: BoxDecoration(
                                color: index == 0
                                    ? Colors.white
                                    : cScaffoldBackgroundColor,
                                borderRadius: BorderRadius.circular(15.0),
                              ),
                              child: Image.asset(cDummyDataSet[index]
                                  ['iconImagePath'] as String),
                            ),
                            const SizedBox(
                              width: 20.0,
                            ),
                            Text(
                              cDummyDataSet[index]['sectionName'] as String,
                              style: TextStyle(
                                color:
                                    index == 0 ? Colors.white : cdarkBlackColor,
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ],
                        ),
                      );
                    }),
                    itemCount: cDummyDataSet.length,
                  ),
                ),
                cDefaultHeight,
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Travel Places', style: cSubheadingTextStyle),
                    Container(
                      width: 80.0,
                      height: 30.0,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: const Color(0xFFEDEDED),
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      child: const Text(
                        'View All',
                        style: TextStyle(
                          color: clightBlackColor,
                          fontFamily: 'Montserrat',
                          fontSize: 12.0,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
                cDefaultHeight,
                SizedBox(
                  height: 200.0,
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemBuilder: ((context, index) {
                      return Container(
                        margin: EdgeInsets.only(
                          right: index !=
                                  (cDummyDataSet[0]['places']
                                              as List<Map<String, Object>>)
                                          .length -
                                      1
                              ? 20.0
                              : 0.0,
                        ),
                        padding: const EdgeInsets.all(10.0),
                        width: 300.0,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(30.0),
                          boxShadow: const [
                            BoxShadow(
                              color: cVeryLightGreyColor,
                              spreadRadius: -10.0,
                              blurRadius: 10.0,
                              offset: Offset(1.0, 3.0),
                            ),
                          ],
                        ),
                        child: Column(
                          children: [
                            Expanded(
                              flex: 2,
                              child: Container(
                                width: double.infinity,
                                alignment: Alignment.topRight,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(30.0),
                                  image: DecorationImage(
                                    image: AssetImage(cDummyDataSet[0]['places']
                                        [index]['imagePath'][0]),
                                    fit: BoxFit.cover,
                                  ),
                                  boxShadow: const [
                                    BoxShadow(
                                      color: cVeryLightGreyColor,
                                      spreadRadius: 1.0,
                                      blurRadius: 10.0,
                                      offset: Offset(1.0, 3.0),
                                    ),
                                  ],
                                ),
                                child: Container(
                                  width: 50.0,
                                  height: 50.0,
                                  margin: const EdgeInsets.all(12.5),
                                  padding: const EdgeInsets.all(10.0),
                                  decoration: const BoxDecoration(
                                    color: cGreyLikeBackgroundColor,
                                    shape: BoxShape.circle,
                                  ),
                                  child: Image.asset(
                                    'assets/icons/heart.png',
                                    color: Colors.white,
                                  ),
                                ),
                              ),
                            ),
                            Expanded(
                              child: Container(
                                padding: const EdgeInsets.only(
                                    top: 15.0, left: 15.0, right: 15.0),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          cDummyDataSet[0]['places'][index]
                                              ['placeName'],
                                          style: const TextStyle(
                                            fontSize: 14.0,
                                            fontFamily: 'Montserrat',
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        Row(
                                          children: [
                                            SizedBox(
                                              width: 20.0,
                                              height: 20.0,
                                              child: Image.asset(
                                                'assets/icons/pin.png',
                                                color: cVeryLightGreyColor,
                                              ),
                                            ),
                                            const SizedBox(
                                              width: 5.0,
                                            ),
                                            Text(
                                              cDummyDataSet[0]['places'][index]
                                                  ['location'],
                                              style: const TextStyle(
                                                color: cVeryLightGreyColor,
                                                fontFamily: 'Montserrat',
                                                fontSize: 12.0,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                    SizedBox(
                                      width: 84.0,
                                      child: Stack(
                                        alignment: Alignment.centerRight,
                                        children: [
                                          ...List.generate(
                                            4,
                                            (index) => Positioned(
                                              left: index * 18,
                                              child: Container(
                                                height: 30.0,
                                                width: 30.0,
                                                alignment: Alignment.center,
                                                decoration: BoxDecoration(
                                                  border: Border.all(
                                                    color: Colors.white,
                                                    width: 2.0,
                                                  ),
                                                  color: Colors.white,
                                                  borderRadius:
                                                      BorderRadius.circular(15),
                                                  boxShadow: const [
                                                    BoxShadow(
                                                      color:
                                                          cVeryLightGreyColor,
                                                      spreadRadius: -2.0,
                                                      blurRadius: 5.0,
                                                      offset: Offset(1.0, 3.0),
                                                    ),
                                                  ],
                                                  image: DecorationImage(
                                                    image: AssetImage(
                                                        'assets/images/profiles/${index + 1}.png'),
                                                    //fit: BoxFit.cover,
                                                  ),
                                                ),
                                                child: index == 3
                                                    ? const Text(
                                                        '+15',
                                                        style: TextStyle(
                                                          fontFamily:
                                                              'Montserrat',
                                                          fontWeight:
                                                              FontWeight.w500,
                                                          fontSize: 12.0,
                                                        ),
                                                      )
                                                    : Container(),
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      );
                    }),
                    itemCount: (cDummyDataSet[0]['places']
                            as List<Map<String, Object>>)
                        .length,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: const CustomBottomNavigationBar('home'),
      floatingActionButton: const CustomFloatingActionButton(),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
    );
  }
}