import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Fecha1 = ({ onClose }) => {
  return (
    <View style={styles.fecha}>
      <View style={[styles.calendarSelectChangeSize, styles.option1ShadowBox]}>
        <View style={styles.header}>
          <View style={styles.month}>
            <View style={[styles.arrowButton, styles.arrowLayout]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
            <View style={[styles.month1, styles.month1FlexBox]}>
              <Text style={styles.month2}>ENERO</Text>
              <Text style={styles.year}>2024</Text>
            </View>
            <View style={[styles.arrowButton1, styles.month1FlexBox]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
          <View style={[styles.separator, styles.weekSpaceBlock]} />
          <View style={[styles.week, styles.weekSpaceBlock]}>
            <Text style={[styles.mon, styles.monFlexBox]}>LU</Text>
            <Text style={[styles.tue, styles.monFlexBox]}>MA</Text>
            <Text style={[styles.tue, styles.monFlexBox]}>MI</Text>
            <Text style={[styles.tue, styles.monFlexBox]}>JU</Text>
            <Text style={[styles.tue, styles.monFlexBox]}>VI</Text>
            <Text style={[styles.tue, styles.monFlexBox]}>SA</Text>
            <Text style={[styles.tue, styles.monFlexBox]}>DO</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>1</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>3</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>4</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>5</Text>
              </View>
            </View>
            <View style={styles.dayStates10}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>6</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>7</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>8</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>10</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>11</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>12</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>13</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>14</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>15</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>16</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>17</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>18</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date18, styles.dateTypo]}>19</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>20</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>21</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>22</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View
                  style={[styles.background27, styles.backgroundPosition]}
                />
                <Text style={[styles.date22, styles.date22Clr]}>23</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>24</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>25</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>26</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>27</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>28</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>29</Text>
              </View>
            </View>
            <View style={styles.dayStates}>
              <View style={styles.day}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Text style={[styles.signIn, styles.date22Clr]}>Guardar</Text>
      </LinearGradient>
      <View style={[styles.horaParent, styles.buttonLayout]}>
        <Text style={styles.hora}>Hora</Text>
        <View style={styles.timePickerParent}>
          <View style={[styles.timePicker, styles.pickerLayout]}>
            <Text style={[styles.hours, styles.hoursPosition]}>11</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.minutes, styles.hoursPosition]}>38</Text>
          </View>
          <View style={[styles.ampmPicker, styles.pickerLayout]}>
            <View style={[styles.option2, styles.pmLayout]}>
              <Text style={[styles.pm, styles.pmTypo]}>PM</Text>
            </View>
            <View style={[styles.option1, styles.amLayout]}>
              <Text style={[styles.am, styles.amLayout]}>AM</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.fechaChild, styles.buttonLayout]}
        contentFit="cover"
        source={require("../assets/line-802.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  option1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    borderStyle: "solid",
  },
  arrowLayout: {
    padding: Padding.p_xs,
    height: 48,
    width: 48,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  month1FlexBox: {
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  weekSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  monFlexBox: {
    textAlign: "center",
    flex: 1,
  },
  dateTypo: {
    zIndex: 1,
    fontSize: FontSize.footnote_size,
    textAlign: "left",
  },
  backgroundPosition: {
    zIndex: 0,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  date22Clr: {
    color: Color.white,
    fontFamily: FontFamily.lato,
  },
  buttonLayout: {
    width: 388,
    position: "absolute",
  },
  pickerLayout: {
    height: 36,
    backgroundColor: Color.secundario,
  },
  hoursPosition: {
    width: 28,
    marginTop: -14,
    color: Color.fAFAFA,
    lineHeight: 28,
    fontSize: FontSize.title2Regular_size,
    textAlign: "right",
    fontFamily: FontFamily.lato,
    top: "50%",
    position: "absolute",
  },
  pmLayout: {
    height: 32,
    width: 48,
    position: "absolute",
  },
  pmTypo: {
    display: "flex",
    lineHeight: 18,
    left: 0,
    top: 0,
    color: Color.fAFAFA,
    letterSpacing: 0,
    fontSize: FontSize.footnote_size,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    justifyContent: "center",
    alignItems: "center",
  },
  amLayout: {
    width: 51,
    height: 32,
    position: "absolute",
  },
  icon: {
    width: 24,
    height: 24,
  },
  arrowButton: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  month2: {
    textAlign: "right",
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: -0.3,
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
  },
  year: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
    lineHeight: 21,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
  },
  month1: {
    flex: 1,
  },
  arrowButton1: {
    padding: Padding.p_xs,
    height: 48,
    width: 48,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  month: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: Color.secundario,
    marginTop: 16,
  },
  mon: {
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  tue: {
    marginLeft: 3,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  week: {
    opacity: 0.5,
    flexDirection: "row",
  },
  header: {
    paddingBottom: Padding.p_base,
    alignSelf: "stretch",
  },
  day: {
    padding: Padding.p_5xs,
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  dayStates: {
    borderColor: Color.secundario,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    borderStyle: "solid",
  },
  date: {
    opacity: 0.1,
    fontWeight: "600",
    zIndex: 1,
    fontSize: FontSize.footnote_size,
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  date5: {
    fontWeight: "600",
    zIndex: 1,
    fontSize: FontSize.footnote_size,
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  dayStates10: {
    borderColor: Color.colorDarkseagreen_100,
    borderWidth: 2,
    flex: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    borderStyle: "solid",
  },
  background23: {
    backgroundColor: Color.white,
  },
  date18: {
    zIndex: 1,
    fontSize: FontSize.footnote_size,
    fontWeight: "700",
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  background27: {
    backgroundColor: Color.primario2,
  },
  date22: {
    zIndex: 1,
    fontSize: FontSize.footnote_size,
    textAlign: "left",
    fontWeight: "700",
  },
  body: {
    height: 194,
    alignSelf: "stretch",
  },
  calendarSelectChangeSize: {
    marginTop: -167,
    marginLeft: -195,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 24,
    elevation: 24,
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    width: 390,
    height: 338,
    padding: Padding.p_base,
    alignItems: "center",
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    backgroundColor: Color.white,
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    textAlign: "center",
    flex: 1,
    fontSize: FontSize.size_base,
    color: Color.white,
  },
  button: {
    top: 452,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    left: 20,
    width: 388,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_11xl,
  },
  hora: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.primary,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  hours: {
    left: 4,
  },
  colon: {
    marginTop: -16,
    left: 33,
    width: 6,
    color: Color.fAFAFA,
    lineHeight: 28,
    fontSize: FontSize.title2Regular_size,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    top: "50%",
    position: "absolute",
  },
  minutes: {
    left: 38,
  },
  timePicker: {
    borderRadius: Border.br_7xs,
    width: 74,
  },
  pm: {
    height: 32,
    width: 48,
    position: "absolute",
  },
  option2: {
    left: 49,
    top: 2,
  },
  am: {
    fontWeight: "900",
    display: "flex",
    lineHeight: 18,
    left: 0,
    top: 0,
    color: Color.fAFAFA,
    letterSpacing: 0,
    fontSize: FontSize.footnote_size,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    justifyContent: "center",
    alignItems: "center",
  },
  option1: {
    left: 2,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.primario1,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    borderColor: Color.colorGray_300,
    borderWidth: 0.5,
    top: 2,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
  },
  ampmPicker: {
    borderRadius: Border.br_4xs,
    width: 100,
    marginLeft: 8,
    overflow: "hidden",
  },
  timePickerParent: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  horaParent: {
    top: 20,
    justifyContent: "space-between",
    left: 20,
    width: 388,
    flexDirection: "row",
    alignItems: "center",
  },
  fechaChild: {
    marginLeft: -194,
    top: 76,
    left: "50%",
    maxHeight: "100%",
  },
  fecha: {
    width: 428,
    height: 524,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
  },
});

export default Fecha1;
