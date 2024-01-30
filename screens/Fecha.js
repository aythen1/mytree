import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Fecha = () => {
  return (
    <View style={[styles.fecha, styles.buttonFlexBox]}>
      <View style={styles.aomesdaParent}>
        <Text style={styles.aomesda}>AÑO/MES/DÍA</Text>
        <Image
          style={styles.stroke1Icon}
          contentFit="cover"
          source={require("../assets/stroke1.png")}
        />
      </View>
      <Image
        style={styles.fechaChild}
        contentFit="cover"
        source={require("../assets/line-80.png")}
      />
      <View style={styles.calendarSelectChangeSize}>
        <View style={styles.header}>
          <View style={[styles.month, styles.buttonFlexBox]}>
            <View style={[styles.arrowButton, styles.arrowLayout]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
            <View style={[styles.month1, styles.month1FlexBox]}>
              <Text style={[styles.month2, styles.yearClr]}>ENERO</Text>
              <Text style={[styles.year, styles.yearClr]}>2024</Text>
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
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>1</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>3</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>4</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date, styles.dateTypo]}>5</Text>
              </View>
            </View>
            <View style={[styles.dayStates10, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>6</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>7</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>8</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>10</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>11</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>12</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>13</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>14</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>15</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>16</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>17</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>18</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date18, styles.dateTypo]}>19</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>20</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>21</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View
                  style={[styles.background23, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>22</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View
                  style={[styles.background27, styles.backgroundPosition]}
                />
                <Text style={[styles.date22, styles.date22Clr]}>23</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>24</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>25</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>26</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>27</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>28</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>29</Text>
              </View>
            </View>
            <View style={[styles.dayStates, styles.dayFlexBox]}>
              <View style={[styles.day, styles.dayFlexBox]}>
                <View style={styles.backgroundPosition} />
                <Text style={[styles.date5, styles.dateTypo]}>30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.fieldWithTitle}>
        <View style={styles.titleBase}>
          <Text style={[styles.edadAproximada, styles.aosTypo]}>
            Edad aproximada
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={[styles.aos, styles.aosTypo]}>8 años</Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Text style={[styles.signIn, styles.date22Clr]}>Guardar</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  yearClr: {
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  weekSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  monFlexBox: {
    textAlign: "center",
    flex: 1,
  },
  dayFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
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
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  date22Clr: {
    color: Color.white,
    fontFamily: FontFamily.lato,
  },
  aosTypo: {
    lineHeight: 19,
    letterSpacing: 0,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  aomesda: {
    fontSize: FontSize.size_lg,
    color: Color.primario1,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  stroke1Icon: {
    height: 13,
    marginLeft: 107,
    width: 24,
  },
  aomesdaParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  fechaChild: {
    maxHeight: "100%",
    width: 428,
    marginTop: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
  arrowButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  month2: {
    textAlign: "right",
    lineHeight: 21,
    letterSpacing: -0.3,
    color: Color.calendarDark,
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  year: {
    marginLeft: 4,
    lineHeight: 21,
    letterSpacing: -0.3,
    color: Color.calendarDark,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
    alignSelf: "stretch",
    flexDirection: "row",
  },
  separator: {
    backgroundColor: Color.secundario,
    height: 1,
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
    justifyContent: "center",
    alignItems: "center",
  },
  dayStates: {
    borderColor: Color.secundario,
    borderRightWidth: 1,
    borderBottomWidth: 1,
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
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  date5: {
    fontWeight: "600",
    zIndex: 1,
    fontSize: FontSize.footnote_size,
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
  },
  dayStates10: {
    borderColor: Color.colorGray_600,
    borderWidth: 2,
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
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    borderColor: Color.colorGray_500,
    borderWidth: 1,
    width: 390,
    height: 338,
    padding: Padding.p_base,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  edadAproximada: {
    color: Color.textTextPrimary,
  },
  titleBase: {
    width: 119,
    paddingBottom: Padding.p_7xs,
    flexDirection: "row",
  },
  aos: {
    top: 15,
    left: 18,
    color: Color.gris,
    position: "absolute",
    letterSpacing: 0,
  },
  field: {
    backgroundColor: Color.fAFAFA,
    height: 49,
    width: 388,
    borderRadius: Border.br_3xs,
  },
  fieldWithTitle: {
    width: 388,
    marginTop: 20,
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
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    width: 388,
    marginTop: 20,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    justifyContent: "center",
  },
  fecha: {
    padding: Padding.p_xl,
    width: "100%",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
  },
});

export default Fecha;
