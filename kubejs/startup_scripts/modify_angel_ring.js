StartupEvents.postInit(() => {
  const AllPowerSources = Java.loadClass('uwu.lopyluna.omni_util.register.AllPowerSources')
  const PowerSource = Java.loadClass('uwu.lopyluna.omni_util.register.AllPowerSources$PowerSource')

  AllPowerSources.ANGEL_FLIGHT = new PowerSource('angel_flight', 32, false, false)
})
