import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Fecha1 from "../components/Fecha1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const AADIRAADIRANCESTRO = () => {
  const [
    iconlyLightOutlineCalendarVisible,
    setIconlyLightOutlineCalendarVisible,
  ] = useState(false);
  const navigation = useNavigation();

  const openIconlyLightOutlineCalendar = useCallback(() => {
    setIconlyLightOutlineCalendarVisible(true);
  }, []);

  const closeIconlyLightOutlineCalendar = useCallback(() => {
    setIconlyLightOutlineCalendarVisible(false);
  }, []);

  return (
    <>
      <View style={styles.aadirAadirAncestro}>
        <View style={[styles.image6Wrapper, styles.fieldFlexBox]}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        <View style={[styles.fieldWithTitleParent, styles.parentPosition]}>
          <View>
            <View style={styles.titleBase}>
              <Text style={[styles.title, styles.titleTypo]}>
                Compartir gestión
              </Text>
            </View>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <View style={styles.placeholderInput}>
                <Text style={[styles.search, styles.searchTypo]}>
                  Seleccionalo de tu lista de amigos
                </Text>
              </View>
              <Image
                style={[styles.iconlyboldfilter2, styles.backLayout]}
                contentFit="cover"
                source={require("../assets/iconlyboldfilter2.png")}
              />
            </View>
          </View>
          <View style={styles.fieldWithTitle1}>
            <View style={styles.titleBase}>
              <Text style={[styles.title, styles.titleTypo]}>Sexo</Text>
            </View>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <View style={styles.placeholderInput}>
                <Text style={[styles.search, styles.searchTypo]}>
                  Fem o Masc
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldWithTitle1}>
            <View style={styles.titleBase}>
              <Text style={[styles.title, styles.titleTypo]}>
                Fecha de defunción
              </Text>
            </View>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <View style={styles.placeholderInput}>
                <Text style={[styles.search, styles.searchTypo]}>
                  12/3/2008
                </Text>
              </View>
              <Pressable
                style={[styles.iconlyboldfilter2, styles.backLayout]}
                onPress={openIconlyLightOutlineCalendar}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/iconlylightoutlinecalendar.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.fieldWithTitle1}>
            <View style={styles.titleBase}>
              <Text style={[styles.title, styles.titleTypo]}>
                Lugar de defunción
              </Text>
            </View>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <View style={styles.placeholderInput}>
                <Text style={[styles.search, styles.searchTypo]}>
                  12/01/2024
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldWithTitle1}>
            <View style={styles.titleBase}>
              <Text style={[styles.title, styles.titleTypo]}>
                Motivo de defunción
              </Text>
            </View>
            <View style={[styles.field, styles.fieldFlexBox]}>
              <View style={styles.placeholderInput}>
                <Text style={[styles.search, styles.searchTypo]}>
                  Muerte natural
                </Text>
              </View>
            </View>
          </View>
        </View>
        <LinearGradient
          style={[styles.button, styles.parentPosition]}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Pressable
            style={[styles.pressable, styles.pressableFlexBox]}
            onPress={() => navigation.navigate("PERFILIDANCESTRO")}
          >
            <Text style={[styles.signIn, styles.searchTypo]}>Añadir</Text>
          </Pressable>
        </LinearGradient>
        <View style={[styles.backParent, styles.pressableFlexBox]}>
          <Pressable
            style={styles.backLayout}
            onPress={() => navigation.navigate("PERFILCREARIDINFANTEANCE")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <Text style={[styles.aadirAncestro, styles.titleTypo]}>
            Añadir Ancestro
          </Text>
        </View>
        <Image
          style={styles.navigationIcon}
          contentFit="cover"
          source={require("../assets/navigation12.png")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={iconlyLightOutlineCalendarVisible}
      >
        <View style={styles.iconlyLightOutlineCalendarOverlay}>
          <Pressable
            style={styles.iconlyLightOutlineCalendarBg}
            onPress={closeIconlyLightOutlineCalendar}
          />
          <Fecha1 onClose={closeIconlyLightOutlineCalendar} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fieldFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  parentPosition: {
    left: 20,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.lato,
    textAlign: "left",
  },
  searchTypo: {
    lineHeight: 24,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
  },
  backLayout: {
    height: 24,
    width: 24,
  },
  pressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  image6Wrapper: {
    top: 3,
    left: 20,
    position: "absolute",
  },
  title: {
    lineHeight: 19,
    fontWeight: "500",
    color: Color.textTextPrimary,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  titleBase: {
    paddingBottom: Padding.p_7xs,
    width: 388,
    flexDirection: "row",
  },
  search: {
    color: Color.textPlaceholder,
    textAlign: "left",
    letterSpacing: 0,
  },
  placeholderInput: {
    flexDirection: "row",
    flex: 1,
  },
  iconlyboldfilter2: {
    marginLeft: 24,
  },
  field: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    width: 388,
  },
  fieldWithTitle1: {
    marginTop: 20,
  },
  iconlyLightOutlineCalendarOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  iconlyLightOutlineCalendarBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  fieldWithTitleParent: {
    top: 127,
  },
  signIn: {
    letterSpacing: 1,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    width: "100%",
  },
  button: {
    top: 744,
    width: 388,
  },
  icon1: {
    overflow: "hidden",
  },
  aadirAncestro: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.negro,
    marginLeft: 20,
    textAlign: "left",
  },
  backParent: {
    top: 78,
    left: 20,
    position: "absolute",
  },
  navigationIcon: {
    top: 821,
    left: 0,
    width: 428,
    height: 105,
    position: "absolute",
  },
  aadirAadirAncestro: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default AADIRAADIRANCESTRO;
