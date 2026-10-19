
import { Alert, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* Brand */}
      <View style={styles.brand}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>+</Text>
        </View>
        <Text style={styles.brandName}>wellnest</Text>
      </View>

      {/* Welcome headline */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>YOUR HEALTH, IN ONE PLACE</Text>
        <Text style={styles.title}>
          Progress that{'\n'}
          <Text style={styles.titleAccent}>feels good.</Text>
        </Text>
        <Text style={styles.subtitle}>
          A simpler way to track your weight, stay
          on top of your medication, and see your
          progress over time.
        </Text>
      </View>

      {/* Feature preview */}
      <View style={styles.preview}>
        <View style={styles.previewHeader}>
          <View>
            <Text style={styles.cardLabel}>YOUR JOURNEY</Text>
            <Text style={styles.cardTitle}>Small steps add up.</Text>
          </View>
          <View style={styles.statusIcon}>
            <Text style={styles.statusIconText}>↗</Text>
          </View>
        </View>

        <View style={styles.features}>
          <View style={styles.featureRow}>
            <View style={[styles.featureIcon, styles.mint]}>
              <Text style={styles.featureEmoji}>⌁</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Weight tracking</Text>
              <Text style={styles.featureDescription}>
                Log measurements and view trends
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>

          <View style={styles.featureDivider} />

          <View style={styles.featureRow}>
            <View style={[styles.featureIcon, styles.peach]}>
              <Text style={styles.featureEmoji}>✓</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Medication tracker</Text>
              <Text style={styles.featureDescription}>
                Keep track of doses and reminders
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>

          <View style={styles.featureDivider} />

          <View style={styles.featureRow}>
            <View style={[styles.featureIcon, styles.lavender]}>
              <Text style={styles.featureEmoji}>♡</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Your progress</Text>
              <Text style={styles.featureDescription}>
                Reflect on changes over time
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <Pressable
          style={styles.primaryButton}
          onPress={() =>
            Alert.alert(
              'Welcome to Wellnest',
              'Your account creation screen will go here.'
            )
          }
        >
          <Text style={styles.primaryButtonText}>Get started</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() =>
            Alert.alert(
              'Welcome back',
              'Your sign-in screen will go here.'
            )
          }
        >
          <Text style={styles.secondaryButtonText}>
            I already have an account
          </Text>
        </Pressable>

        <Text style={styles.disclaimer}>
          Your journey, your pace. Every step counts.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
    paddingHorizontal: 26,
    paddingTop: 58,
    paddingBottom: 24,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'transparent',
  },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: '#236B55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '500',
    lineHeight: 34,
  },
  brandName: {
    fontSize: 23,
    fontWeight: '700',
    color: '#204B3D',
    letterSpacing: -0.8,
  },
  hero: {
    marginTop: 43,
    backgroundColor: 'transparent',
  },
  eyebrow: {
    color: '#55816D',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 15,
  },
  title: {
    color: '#1D3D32',
    fontSize: 43,
    fontWeight: '700',
    lineHeight: 49,
    letterSpacing: -1.8,
  },
  titleAccent: {
    color: '#39866A',
  },
  subtitle: {
    marginTop: 16,
    fontSize: 15,
    lineHeight: 24,
    color: '#6B7E74',
    maxWidth: 315,
  },
  preview: {
    marginTop: 29,
    padding: 19,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EEE9',
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginBottom: 13,
  },
  cardLabel: {
    color: '#81968A',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.7,
  },
  cardTitle: {
    color: '#244638',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 5,
  },
  statusIcon: {
    width: 36,
    height: 36,
    borderRadius: 13,
    backgroundColor: '#E8F4EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIconText: {
    color: '#39866A',
    fontSize: 23,
  },
  features: {
    backgroundColor: 'transparent',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'transparent',
  },
  featureIcon: {
    width: 43,
    height: 43,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mint: {
    backgroundColor: '#E5F3E9',
  },
  peach: {
    backgroundColor: '#FFF0E5',
  },
  lavender: {
    backgroundColor: '#F0ECFA',
  },
  featureEmoji: {
    fontSize: 22,
    color: '#356C54',
  },
  featureText: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: 'transparent',
  },
  featureTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2C483B',
  },
  featureDescription: {
    marginTop: 4,
    fontSize: 10,
    color: '#849188',
  },
  arrow: {
    color: '#8DA095',
    fontSize: 24,
    marginLeft: 5,
  },
  featureDivider: {
    height: 1,
    backgroundColor: '#EFF2EF',
  },
  actions: {
    marginTop: 'auto',
    backgroundColor: 'transparent',
  },
  primaryButton: {
    height: 56,
    borderRadius: 17,
    backgroundColor: '#236B55',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  buttonArrow: {
    position: 'absolute',
    right: 20,
    color: '#FFFFFF',
    fontSize: 22,
  },
  secondaryButton: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    color: '#426956',
    fontSize: 13,
    fontWeight: '600',
  },
  disclaimer: {
    color: '#94A198',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
  },
});

