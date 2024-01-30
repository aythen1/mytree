import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PERFILDELUSUARIOVISITADO = () => {
  return (
    <View style={styles.perfilDelUsuarioVisitado}>
      <View
        style={[
          styles.perfilDelUsuarioVisitadoChild,
          styles.frameParent14ShadowBox,
        ]}
      />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.buttonParent}>
          <LinearGradient
            style={[styles.button, styles.buttonFlexBox]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Text style={styles.signIn}>Guardar</Text>
          </LinearGradient>
          <View style={styles.opcionesDePersonalizacinParent}>
            <Text style={styles.amigoTypo}>Opciones de personalización</Text>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>Relación</Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>Amigo</Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>Grupo</Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>Colegio</Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-78.png")}
            />
            <Text style={[styles.notificaciones, styles.amigoTypo]}>
              Notificaciones
            </Text>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text
                  style={[styles.relacin, styles.amigoTypo]}
                >{`Permitir que Bruno reciba actualizaciones `}</Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>Activado</Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Activar notificaciones sobre el feed de Bruno
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Bloquear notificaciones de este usuario
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Bloquear notificaciones del usuario a este usuario
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-78.png")}
            />
            <Text style={[styles.notificaciones, styles.amigoTypo]}>
              Privacidad
            </Text>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que Bruno visualice mi información
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>Activado</Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que Bruno me etiquete en sus recuerdos
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que Bruno observe Mis Recuerdos
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que Bruno observe Mis Álbumes
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que Bruno visualice mis diarios familiares
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text
                  style={[styles.permitirQueBruno6, styles.amigoTypo]}
                >{`Permitir que Bruno visualice mi contenido en su 
calendario`}</Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que Bruno me visualice en su árbol
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir que los contactos de Bruno vean mi perfil
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir visualizar mis logros y recompensas
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.amigoTypo]}>
                  Permitir visualizar mi estado de salud
                </Text>
                <Text style={[styles.amigo, styles.amigoTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIcon16}
                contentFit="cover"
                source={require("../assets/vector48.png")}
              />
              <Text
                style={[styles.anunciarDefuncin, styles.ajustesDeBrunoTypo]}
              >
                Anunciar defunción
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIcon16}
                contentFit="cover"
                source={require("../assets/vector48.png")}
              />
              <Text
                style={[styles.anunciarDefuncin, styles.ajustesDeBrunoTypo]}
              >
                Desvincular este perfil del tree familiar
              </Text>
            </View>
          </View>
          <View style={[styles.frameInner, styles.framePosition]} />
        </View>
        <View style={[styles.frameParent14, styles.frameParent14Position]}>
          <View style={styles.image6Parent}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.frameGroupFlexBox,
              ]}
            >
              <Image
                style={styles.backIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinecalendar4.png")}
              />
              <Image
                style={[styles.documentIcon, styles.documentIconLayout]}
                contentFit="cover"
                source={require("../assets/document6.png")}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesetting6.png")}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.buttonFlexBox]}>
            <Image
              style={[styles.backIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
            <Text style={[styles.ajustesDeBruno, styles.ajustesDeBrunoTypo]}>
              Ajustes de Bruno Pham
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.navigationIcon, styles.frameParent14Position]}
        contentFit="cover"
        source={require("../assets/navigation30.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent14ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    top: 0,
    backgroundColor: Color.white,
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroupFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  amigoTypo: {
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
  },
  ajustesDeBrunoTypo: {
    fontWeight: "700",
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameParent14Position: {
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  backIconLayout: {
    height: 24,
    width: 24,
  },
  perfilDelUsuarioVisitadoChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 25,
    elevation: 25,
    height: 113,
    width: 428,
    left: 0,
    position: "absolute",
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  button: {
    top: 1364,
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    width: 388,
    zIndex: 0,
    left: 0,
    position: "absolute",
  },
  relacin: {
    color: Color.negro,
  },
  amigo: {
    color: Color.grisGeneral,
    marginTop: 10,
  },
  relacinParent: {
    width: 347,
  },
  vectorIcon: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    maxHeight: "100%",
    marginTop: 20,
    width: 388,
  },
  notificaciones: {
    marginTop: 20,
  },
  permitirQueBruno6: {
    color: Color.negro,
    width: 347,
  },
  vectorIcon16: {
    width: 22,
    height: 22,
  },
  anunciarDefuncin: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    color: Color.primario1,
    letterSpacing: 0,
    fontWeight: "700",
  },
  vectorParent: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  opcionesDePersonalizacinParent: {
    height: 1344,
    paddingHorizontal: 0,
    paddingVertical: 100,
    marginLeft: 10,
    zIndex: 1,
  },
  frameInner: {
    top: 1438,
    height: 102,
    zIndex: 2,
    position: "absolute",
    left: 0,
    backgroundColor: Color.white,
  },
  buttonParent: {
    padding: Padding.p_xl,
    zIndex: 0,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    marginLeft: 112,
  },
  image6Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  backIcon: {
    overflow: "hidden",
  },
  ajustesDeBruno: {
    fontSize: FontSize.size_5xl,
    color: Color.negro,
  },
  backParent: {
    marginTop: 6,
  },
  frameParent14: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    zIndex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    top: 0,
    backgroundColor: Color.white,
  },
  frameParent: {
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428,
  },
  perfilDelUsuarioVisitado: {
    borderRadius: Border.br_31xl,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PERFILDELUSUARIOVISITADO;
